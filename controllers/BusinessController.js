import Business from '../models/Business.js';


export const crearNegocio = async (req, res) => {

    const { name, storeLocation, description } = req.body;
    if(!name || !storeLocation || !description){
        return res.status(400).json({error: "Faltan datos"})
    }

    const negocio =({
      name,
      storeLocation,
      description,
    });

  try {
    const nuevoNegocio = await Business.create(negocio);
    res.status(201).json(nuevoNegocio);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear negocio', error: error.message });
  }
};


export const obtenerNegociosPorUbicacion = async (req, res) => {
  try {
    const { storeLocation } = req.query;
    const negocios = await Business.find({ storeLocation });
    
    if (negocios.length === 0) {
      return res.status(404).json({ mensaje: 'No se encontraron negocios en esta ubicación' });
    }

    res.json(negocios);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener negocios', error: error.message });
  }
};
