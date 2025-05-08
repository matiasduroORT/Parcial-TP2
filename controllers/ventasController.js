import Venta from "../models/Venta.js";
import Alumno from "../models/Alumno.js";

export const crearVenta = async (req, res) => {
  const { alumnoId, monto, descripcion, estado } = req.body;

  if (!alumnoId || !monto || !descripcion) {
    return res.status(400).json({ error: "Faltan datos requeridos (alumnoId, monto, descripcion)" });
  }

  try {
    const alumnoExiste = await Alumno.findById(alumnoId);
    if (!alumnoExiste) {
      return res.status(404).json({ error: "El alumno no existe" });
    }

    const nuevaVenta = await Venta.create({
      alumno: alumnoId,
      monto,
      descripcion,
      estado: estado || 'pendiente'
    });

    res.status(201).json(nuevaVenta);
  } catch (error) {
    console.error("Error al crear venta:", error);
    res.status(500).json({ error: "Error al crear la venta" });
  }
};

export const getVentas = async (req, res) => {
  try {
    const ventas = await Venta.find().populate('alumno', 'nombre email');
    res.json(ventas);
  } catch (error) {
    console.error("Error al obtener ventas:", error);
    res.status(500).json({ error: "Error al obtener las ventas" });
  }
};

export const getVentaById = async (req, res) => {
  try {
    const venta = await Venta.findById(req.params.id).populate('alumno', 'nombre email');
    
    if (venta) {
      res.json(venta);
    } else {
      res.status(404).json({ error: "Venta no encontrada" });
    }
  } catch (error) {
    console.error("Error al obtener venta por ID:", error);
    res.status(500).json({ error: "ID de venta inválido" });
  }
};