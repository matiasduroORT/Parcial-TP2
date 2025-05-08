import Sales from "../models/Venta.js"

export const getVentas = async (req, res) => {
    try {
        const ventas = await Sales.find()
        res.json(ventas)
    } catch (error) {
        res.status(500).json({error: "Error al obtener ventas"})
    }
}

export const getVentasById = async (req, res) => {

    try {
        const venta = await Sales.findById(req.params.id)
        if(venta){
            res.json(venta)
        }else{
            res.status(404).json({ error: 'Venta no encontrada'})
        }
    } catch (error) {
        res.status(500).json({ error: "ID Invalido"})
    }

}

export const CrearVenta = async (req, res) => {  

    const { idUsuario,nombre, importe, fecha } = req.body;
    if(!idUsuario || !importe || !fecha){
        return res.status(400).json({error: "Faltan datos"})
    }
   
    const venta = {
        idUsuario,
        nombre,
        importe,
        fecha,
    }

    try {
        const nuevaVenta = await Sales.create(venta)
        res.status(201).json(nuevoAlumno)
    } catch (error) {
        res.status(500).json({error: "Error al crear Venta"})
    }
    
}

export const ModificarUsuario = async (req,res) =>{
  
        const id = req.params;
        const nombre = req.body;
  

}