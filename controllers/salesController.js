import Sale from "../models/Sale.js"
import Alumno from "../models/Alumno.js"


export const getSales = async (req, res) => {
    try {
        const sales = await Sale.find().populate('alumno', 'nombre email')
        res.json(sales)
    } catch (error) {
        res.status(500).json({error: "Error al obtener ventas"})
    }
}


export const getSaleById = async (req, res) => {
    try {
        const sale = await Sale.findById(req.params.id).populate('alumno', 'nombre email')
        if(sale){
            res.json(sale)
        }else{
            res.status(404).json({ error: 'Venta no encontrada'})
        }
    } catch (error) {
        res.status(500).json({ error: "ID Invalido"})
    }
}


export const createSale = async (req, res) => {
    const { alumnoId, monto, descripcion } = req.body;

    if(!alumnoId || !monto || !descripcion){
        return res.status(400).json({error: "Faltan datos"})
    }

    try {
        
        const alumno = await Alumno.findById(alumnoId)
        if(!alumno){
            return res.status(404).json({error: "Alumno no encontrado"})
        }

        const sale = {
            alumno: alumnoId,
            monto,
            descripcion
        }

        const nuevaVenta = await Sale.create(sale)
        res.status(201).json(nuevaVenta)
    } catch (error) {
        res.status(500).json({error: "Error al crear la venta"})
    }
} 