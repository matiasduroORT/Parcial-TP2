import Alumno from "../models/Alumno.js"
import Venta from "../models/Venta.js";

export const crearVentaParticular = async (req, res) => {
    const id = req.params.idAlumno;

    const alumno = await Alumno.findById(id)
    if(!alumno){
        return res.status(404).json("No hay un alumno con ese id")
    }

    const {idAlumno, fecha, precio} = req.body;
    if(!idAlumno || !fecha || !precio){
        return res.status(400).json({error: "Faltan datos"})
    }

    const venta = {
        idAlumno,
        fecha,
        precio
    }

    try {
        const nuevaVenta = await Venta.create(venta)
        res.status(201).json(nuevaVenta)
    } catch (error) {
        res.status(500).json({error: "No se puedo crear la venta"})
    }

}

export const getVentas = async (req,res) => {
    try {
        const ventas = await Venta.find()
        return res.json(ventas)
    } catch (error) {
        res.status(500).json({error: "Error al obtener las ventas"})
    }
}

export const getVentasById = async (req,res) => {
    try {
        const venta = await Venta.find({ idAlumno: req.params.idAlumno })
        if(venta.length === 0){
            res.status(404).json({error: "No se encontró ninguna venta con ese id"})
        }

        res.json(venta)
    } catch (error) {
        res.status(500).json({ error: "ID de venta invalido"})
    }
}

