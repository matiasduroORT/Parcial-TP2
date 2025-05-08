import Negocio from "../models/Negocio.js";

export const crearNegocio = async (req, res) => {
    const { nombre, storeLocation } = req.body;

    if (!nombre || !storeLocation) {
        return res.status(400).json({ error: "Faltan datos" });
    }

    try {
        const nuevoNegocio = await Negocio.create({ nombre, storeLocation });
        res.status(201).json(nuevoNegocio);
    } catch (error) {
        res.status(500).json({ error: "Error al crear el negocio" });
    }
};


export const obtenerNegocios = async (req, res) => {
    const { storeLocation } = req.query;

    try {
        let negocios;

        if (storeLocation) {
            // Filtrar por ubicación si se proporciona el parámetro
            negocios = await Negocio.find({ storeLocation });
            if (negocios.length === 0) {
                return res.status(404).json({ message: `No hay negocios en la ubicación: ${storeLocation}` });
            }
        } else {
            // Obtener todos los negocios si no se proporciona el parámetro
            negocios = await Negocio.find();
        }

        res.status(200).json(negocios);
    } catch (error) {
        console.error("Error al obtener los negocios:", error);
        res.status(500).json({ error: "Error al obtener los negocios" });
    }
};