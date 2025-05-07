import Negocio from '../models/Negocio.js'

export const CrearNegocio = async (req, res) => {

    const {nombre, localidad, direccion} = req.body;

    if(!nombre || !localidad || !direccion) {
        return res.status(400).json({error: "Bad Request. Faltan datos."});
    }

    const negocio = {
        nombre,
        localidad,
        direccion
    }

    try {
        const nuevoNegocio = await Negocio.create(negocio);
        res.status(201).json(nuevoNegocio);
    } catch (error) {
        res.status(500).json({error: "Error al crear negocio"});
    }
}

export const ObtenerNegocioPorLocalidad = async (req, res) => {
    const localidad = req.query.localidad;
    if(!localidad) {
        return res.status(400).json({error: "No se encontro query parameters 'localidad'."});
    }
    try {
        const negocios = await localidad.find({localidad: localidad});
        res.status(200).json(negocios)
    } catch (error) {
        res.status(500).json({error: "Error al obtener negocios por localidad"});
    }
}