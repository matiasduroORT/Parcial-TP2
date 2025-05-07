import Venta from "../models/Venta.js"

export const CrearVenta = async (req, res) => {

    const {concepto, precio, idAlumno, idNegocio} = req.body;

    if(!concepto || !precio || !idAlumno || !idNegocio) {
        return res.status(400).json({error: "Bad Request. Faltan datos."});
    }

    const venta = {
        concepto,
        precio,
        idAlumno,
        idNegocio
    }

    try {
        const nuevaVenta = await Venta.create(venta);
        res.status(201).json(nuevaVenta)
    } catch (error) {
        res.status(500).json({error: "Error al crear venta"})
    }
}

export const ObtenerVentas = async (req, res) => {
    try {
        const ventas = await Venta.find()
        res.json(ventas)
    } catch(error) {
        res.status(500).json({error: "Error al obtener ventas"})
    }
}

export const ObtenerVentaPorId = async (req, res) => {
    try {
        const venta = await Venta.findById(req.params.id);
        if(venta) {
            res.status(200).json(venta);
        } else {
            res.status(404).json({ error: 'No se encontro la venta con id: ' + req.params.id});
        }
    } catch(error) {
        res.status(500).json({error: "Error al obtener la venta"});
    }
}