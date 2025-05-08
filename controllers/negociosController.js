import Negocio from "../models/Negocio.js";


export const getNegocios = async (req, res) => {

    const {storeLocation} = req.query

    try {
        //valido si en el query hay storeLocation, sino busco todos
        const filtro = storeLocation ? {storeLocation} : {}
        const negocios = await Negocio.find(filtro)
        if(negocios){
            res.json(negocios)
        }else{
            res.status(404).json({ error: 'Negocio no encontrado'})
        }
    } catch (error) {
        res.status(500).json({ error: "ID Invalido"})
    }
  

}

export const crearNegocio = async (req, res) => {  

    

    const { nombre,storeLocation} = req.body;
    if(!nombre || !storeLocation){
        return res.status(400).json({error: "Faltan datos"})
    }

    
    const negocio = {
        nombre,
        storeLocation
    }

    try {
        const nuevoNegocio = await Negocio.create(negocio)
        res.status(201).json(nuevoNegocio)
    } catch (error) {
        res.status(500).json({error: "Error al crear Negocio"})
    }
    
}