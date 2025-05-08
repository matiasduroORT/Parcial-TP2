import StoreLocation from "../models/storeLocation.js"

export const getStoreLocation = async (req, res) => {
    try {
        const storeLocation = await StoreLocation.find()
        res.json(storeLocation)
    } catch (error) {
        res.status(500).json({error: "Error al obtener las localidades"})
    }
}

export const getStoreLocationById = async (req, res) => {

    try {
        const storeLocation = await StoreLocation.findById(req.params.id)
        if(storeLocation){
            res.json(storeLocation)
        }else{
            res.status(404).json({ error: 'Venta no encontrada'})
        }
    } catch (error) {
        res.status(500).json({ error: "ID Invalido"})
    }

}