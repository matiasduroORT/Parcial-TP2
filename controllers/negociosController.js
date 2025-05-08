import Negocio from "../models/Negocio.js"

export const getNegocios = async (req, res) => {
  try {
    const negocios = await Negocio.find(req.query);
    res.json(negocios);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener negocios" });
  }
};

export const getNegocioById = async (req, res) => {
  try {
    const negocio = await Negocio.findById(req.params.id);
    if (negocio) {
      res.json(negocio);
    } else {
      res.status(404).json({ error: "Negocio no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "ID Invalido" });
  }
};

export const crearNegocio = async (req, res) => {
  if (
    !req.body.storeLocation ||
    !req.body.telefono ||
    !req.body.direccion
  ) {
    return res.status(400).json({ error: "Faltan datos" });
  }
  const { storeLocation, telefono, direccion } = req.body;

  const negocio = {
    storeLocation,
    telefono,
    direccion,
  };

  try {
    const nuevoNegocio = await Negocio.create(negocio);
    res.status(201).json(nuevoNegocio);
  } catch (error) {
    res.status(500).json({ error: "Error al crear Negocio" });
  }
}