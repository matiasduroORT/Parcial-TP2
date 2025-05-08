import Negocio from "../models/Negocio.js"

export const CrearNegocio = async (req, res) => {  

    const { nombre, storeLocation} = req.body;
    if(!nombre || !storeLocation){
        return res.status(400).json({error: "Faltan datos"})
    }
   
    const negocio = {
        nombre,
        storeLocation,
    }

    try {
        const nuevoNegocio = await Negocio.create(negocio)
        res.status(201).json(nuevoNegocio)
    } catch (error) {
        res.status(500).json({error: "Error al crear el Negocio"})
    }
    
}

export const filtrarNegocio = async (req, res) => {

    try {
        const negocio = await Negocio.find(req.query)
        if(negocio){
            res.json(negocio)
        }else{
            res.status(404).json({ error: 'Negocio no encontrado'})
        }
    } catch (error) {
        res.status(500).json({ error: "storeLocation invalido"})
    }

}