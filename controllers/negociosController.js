import Negocio from "../models/Negocio.js";
import bcrypt from "bcryptjs";

export const home = (req, res) => {
  res.send(`<h1>Home de la API</h1>`);
};

export const GetNegocios = async (req, res) => {
  try {
    const negocios = await Negocio.find();
    res.json(negocios);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener negocios" });
  }
};

export const GetNegociosPorUbicacion = async (req, res) => {
  try {
    const negocios = await Negocio.find({
      storeLocation: req.params.storeLocation,
    });
    if (negocios.length > 0) {
      res.json(negocios);
    } else {
      res
        .status(404)
        .json({ error: "No se encontraron negocios en esta ubicación" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al obtener negocios" });
  }
};

export const CrearNegocio = async (req, res) => {
  const { nombre, storeLocation } = req.body;
  if (!storeLocation || !nombre) {
    return res.status(400).json({ error: "Faltan datos" });
  }

  const negocio = {
    nombre,
    storeLocation,
  };

  try {
    const nuevoNegocio = await Negocio.create(negocio);
    res.status(201).json(nuevoNegocio);
  } catch (error) {
    res.status(500).json({ error: "Error al crear Negocio" });
  }
};
