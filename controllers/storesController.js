import Store from "../models/Store.js"


export const getStores = async (req, res) => {
    try {
        const stores = await Store.find()
        res.json(stores)
    } catch (error) {
        res.status(500).json({error: "Error al obtener tiendas"})
    }
}


export const getStoresByLocation = async (req, res) => {
    try {
        const { location } = req.params
        const stores = await Store.find({ storeLocation: location })
        if(stores.length > 0){
            res.json(stores)
        }else{
            res.status(404).json({ error: 'No se encontraron tiendas en esa ubicación'})
        }
    } catch (error) {
        res.status(500).json({ error: "Error al buscar tiendas"})
    }
}


export const createStore = async (req, res) => {
    const { nombre, storeLocation, direccion, telefono } = req.body;

    if(!nombre || !storeLocation || !direccion || !telefono){
        return res.status(400).json({error: "Faltan datos"})
    }

    try {
        const store = {
            nombre,
            storeLocation,
            direccion,
            telefono
        }

        const nuevaTienda = await Store.create(store)
        res.status(201).json(nuevaTienda)
    } catch (error) {
        res.status(500).json({error: "Error al crear la tienda"})
    }
} 