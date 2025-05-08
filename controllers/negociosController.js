import Negocio from "../models/Negocio.js";

export const crearNegocio = async (req, res) => {
  const { nombre, ubicacion, direccion, telefono, email } = req.body;

  if (!nombre || !ubicacion || !direccion) {
    return res.status(400).json({ error: "Faltan datos requeridos (nombre, ubicacion, direccion)" });
  }

  try {
    const nuevoNegocio = await Negocio.create({
      nombre,
      ubicacion,
      direccion,
      telefono,
      email
    });

    res.status(201).json(nuevoNegocio);
  } catch (error) {
    console.error("Error al crear negocio:", error);
    res.status(500).json({ error: "Error al crear el negocio" });
  }
};


export const getNegociosByUbicacion = async (req, res) => {
  const { ubicacion } = req.params;

  if (!ubicacion) {
    return res.status(400).json({ error: "Debe especificar una ubicación" });
  }

  try {
    const negocios = await Negocio.find({
      ubicacion: { $regex: new RegExp(ubicacion, 'i') }
    });

    if (negocios.length === 0) {
      return res.status(404).json({ message: "No se encontraron negocios en esta ubicación" });
    }

    res.json(negocios);
  } catch (error) {
    console.error("Error al obtener negocios por ubicación:", error);
    res.status(500).json({ error: "Error al buscar negocios por ubicación" });
  }
};
