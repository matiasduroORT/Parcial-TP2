import Venta from "../models/Venta.js"

export const home = (req, res) => {
    res.send(`<h1>Home de Ventas</h1>`)
}

export const getVentas = async (req, res) => {
    try {
        const ventas = await Venta.find()
        res.json(ventas)
    } catch (error) {
        res.status(500).json({error: "Error al obtener ventas"})
    }
}

export const getVentasById = async (req, res) => {

    try {
        const venta = await Venta.findById(req.params.id)
        if(venta){
            res.json(venta)
        }else{
            res.status(404).json({ error: 'Venta no encontrado'})
        }
    } catch (error) {
        res.status(500).json({ error: "ID Invalido"})
    }

}

export const CrearVenta = async (req, res) => {  

    const { nombre, usuario, fecha, precio } = req.body;
    if(!nombre || !usuario || !fecha || !precio){
        return res.status(400).json({error: "Faltan datos"})
    }
    
    const venta = {
        nombre,
        usuario,
        fecha,
        precio
    }

    try {
        const nuevaVenta = await Venta.create(venta)
        res.status(201).json(nuevaVenta)
    } catch (error) {
        res.status(500).json({error: "Error al crear Venta"})
    }
    
}