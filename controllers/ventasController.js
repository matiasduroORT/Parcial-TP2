import Venta from "../models/Venta.js";

export const home = (req, res) => {
    res.send(`<h1>Home de la API</h1>`)
}

export const getVentas = async (req, res) => {
    try {
        const ventas = await Venta.find()
        res.json(ventas)
    } catch (error) {
        res.status(500).json({error: "Error al obtener ventas"})
    }
}

export const getVentaById = async (req, res) => {

    try {
        const venta = await Venta.findById(req.params.id)
        if(venta){
            res.json(venta)
        }else{
            res.status(404).json({ error: 'Venta no encontrada'})
        }
    } catch (error) {
        res.status(500).json({ error: "ID Invalido"})
    }
  

}

export const crearVenta = async (req, res) => {  

    

    const { producto,cantidad,total} = req.body;
    const {idAlumno} = req.params
    if(!producto || !cantidad || !total || !idAlumno){
        return res.status(400).json({error: "Faltan datos"})
    }

    
    const venta = {
        producto,
        cantidad,
        total,
        idAlumno
    }

    try {
        const nuevaVenta = await Venta.create(venta)
        res.status(201).json(nuevaVenta)
    } catch (error) {
        res.status(500).json({error: "Error al crear Venta"})
    }
    
}