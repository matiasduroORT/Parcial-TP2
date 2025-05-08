import Venta from "../models/Venta.js";
import Alumno from "../models/Alumno.js";

export const getVentas = async (req, res) => {
  try {
    const ventas = await Venta.find();
    res.json(ventas);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener ventas" });
  }
};

export const getVentaById = async (req, res) => {
  try {
    const venta = await Venta.findById(req.params.id);
    if (venta) {
      res.json(venta);
    } else {
      res.status(404).json({ error: "Venta no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: "ID Invalido" });
  }
};

export const crearVenta = async (req, res) => {
  if (!req.body.idAlumno || !req.body.subtotal) {
    return res.status(400).json({ error: "Faltan datos" });
  }

  const { idAlumno, subtotal } = req.body;

  try {
    const alumno = await Alumno.findById(idAlumno);
    if (!alumno) {
      res.status(404).json({ error: "ID de Alumno inexistente" });
      return;
    }
  } catch (error) {
    res.status(500).json({ error: "Error al validar ID de Alumno" });
    return;
  }

  const venta = {
    idAlumno,
    subtotal,
    fecha: new Date(),
  };

  try {
    const nuevoVenta = await Venta.create(venta);
    res.status(201).json(nuevoVenta);
  } catch (error) {
    res.status(500).json({ error: "Error al crear Venta" });
  }
};
