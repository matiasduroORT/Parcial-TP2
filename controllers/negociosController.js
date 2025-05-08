import Negocio from "../models/Negocio.js";

export const crearNegocio = async (req, res) => {
    const { id, nombre, storeLocation} = req.body;

    if(!id || !nombre || !storeLocation){
        return res.status(400).json({error: "Faltan datos"})
    }

    const negocio = {id, nombre, storeLocation}

        try {
            const nuevoNegocio = await Negocio.create(negocio)
            res.status(201).json(nuevoNegocio)

        } catch (error) {
            res.status(500).json({error: "Error al crear Negocio"})
        }

}

export const negocioPorZona = async (req, res) => {

    try {
        const negocio = await Negocio.find({storeLocation: req.params.storeLocation});
        
        if(!negocio){
            res.status(404).json({error: "No se encontró ningun negocio con esa zona"})
        }
        return res.json(negocio)
        

    } catch (error) {
        res.status(500).json({ error: "Store invalido"})
    }

}

export const getNegocios = async (req,res) => {
    try {
        const negocios = await Negocio.find()
        return res.json(negocios)
    } catch (error) {
        res.status(500).json({error: "Error al obtener los negocios"})
    }
}