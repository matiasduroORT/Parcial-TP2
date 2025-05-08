import Negocio from '../models/negocio.js'

export const crearNegocio = async(req, res) => {


    //Obtengo los datos del body y compruebo que no sean Falsy.
    const {nombre, storeLocation} = req.body;

    if(!nombre || !storeLocation){
        return res.status(400).json({error: "Debe ingresar los datos del nuevo negocio."})
    }

    //Creo un nuevo objeto Negocio que será cargado a ala BD.
    const nuevoNegocio = {
        nombre,
        storeLocation
    }

    //Intento cargar el nuevo negocio en la BD
    try {
        const ubicacion = req.query.storeLocation;   

        if(ubicacion || ubicacion != null){
            const negocios = await Negocio.find({storeLocation: ubicacion})
            res.status(201).json(negocios);
            
        } else{

            const NegocioCreado = await Negocio.create(nuevoNegocio);
            res.status(201).json(NegocioCreado)
        }
    } catch (error){
        res.status(500).json({error: `No se pudo cargar el negocio. Error: ${error.message}`})
    }
}