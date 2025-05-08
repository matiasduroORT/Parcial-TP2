import Negocio from "../models/Negocio.js"

export const home = (req, res) => {
    res.send(`<h1>Home de la API</h1>`)
}

export const getNegociosByStoreLocation = async (req, res) => {
    const { storeLocation } = req.params; 

    try {
        const negocios = await Negocio.find({storeLocation})
        if(negocios.length === 0){
            return res.status(404).json({error: "No se hay negocios en esta ubicación"});
        } 
        res.json(negocios);
        } catch (error) {
        res.status(500).json({ error: "Error al obtener negocios" });
    }
}

export const CrearNegocio = async (req, res) => {  

    const { nombre, storeLocation, direccion, altura } = req.body;
    if(!nombre || !storeLocation || !direccion || !altura){
        return res.status(400).json({error: "Faltan datos"})
    }
    
    const negocio = {
        nombre,
        storeLocation,
        direccion,
        altura,
    }

    try {
        const nuevoNegocio = await Negocio.create(negocio)
        res.status(201).json(nuevoNegocio)
    } catch (error) {
        res.status(500).json({error: "Error al crear Negocio"})
    }
    
}