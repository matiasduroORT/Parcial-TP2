import Store from "../models/Store.js"

export const CrearStore = async (req, res) => {  

    // res.json({
    //     reqBody: req.body,
    //     reqParams: req.params,
    //     reqQuery: req.query,
    // })

    const { idStore, storeLocation } = req.body;
    if(!idStore, !storeLocation){
        return res.status(400).json({error: "Faltan datos"})
    }    
    const store = {
        idStore,
        storeLocation
    }

    try {
        const nuevoStore = await Store.create(store)
        res.status(201).json(nuevoStore)
    } catch (error) {
        res.status(500).json({error: "Error al crear negocio"})
    }
    
}

export const getStoresByStoreLocation = async (req, res) => {
    const { storeLocation } = req.params;

    try {
        const stores = await Store.find({ storeLocation });

        if (stores.length > 0) {
            res.json(stores);
        } else {
            res.status(404).json({ error: "No se encontraron negocios en esa ubicacion" });
        }
    } catch (error) {
        res.status(500).json({ error: "Error al buscar negocios"});
    }
};