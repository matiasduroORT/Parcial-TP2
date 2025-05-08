import Venta from "../models/Venta.js";

export const crearVenta = async (req, res) => {
    const { usuarioId,  productos, total } = req.body;

    // Validación de datos
    if (!usuarioId|| !productos || !total) {
        return res.status(400).json({ error: "Faltan datos" });
    }

    try {
        // Crear la venta en la base de datos
        const nuevaVenta = await Venta.create({
            usuarioId,
            productos,
            total,
        });

        // Responder con la venta creada
        res.status(201).json(nuevaVenta);
    } catch (error) {
        res.status(500).json({ error: "Error al crear la venta" });
    }
};

export const obtenerVentas = async (req, res) => {
    try {
        const ventas = await Venta.find();
        res.status(200).json(ventas); 
    } catch (error) {
        res.status(500).json({ error: "Error al obtener las ventas" }); 
    }
};
