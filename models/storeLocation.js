import mongoose from "mongoose";

const storeLocationSchema = mongoose.Schema({
    IdComprador: { type: String, required: true},
    nombre: { type: String, required: true},
    ventas: { type: []}
    
}, { timestamps: true})

export default mongoose.model("StoreLocation", storeLocationSchema)