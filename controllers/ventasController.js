import Venta from "../models/Venta.js";
import bcrypt from "bcryptjs";

export const home = (req, res) => {
  res.send(`<h1>Home de la API</h1>`);
};

export const GetVentas = async (req, res) => {
  try {
    const ventas = await Venta.find();
    res.json(ventas);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener ventas" });
  }
};

export const GetVentaById = async (req, res) => {
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

export const CrearVenta = async (req, res) => {
  // res.json({
  //     reqBody: req.body,
  //     reqParams: req.params,
  //     reqQuery: req.query,
  // })

  const { producto, cantidad, precio, fecha, alumnoId } = req.body;
  if (!producto || !cantidad || !precio || !fecha || !alumnoId) {
    return res.status(400).json({ error: "Faltan datos" });
  }

  const venta = {
    producto,
    cantidad,
    precio,
    fecha,
    alumnoId,
  };

  try {
    const nuevaVenta = await Venta.create(venta);
    res.status(201).json(nuevaVenta);
  } catch (error) {
    res.status(500).json({ error: "Error al crear Venta" });
  }
};
