import mongoose from "mongoose";

const storeSchema = mongoose.Schema({
    nombre: { type: String, required: true},
    storeLocation: { type: String, required: true},
    direccion: { type: String, required: true},
    telefono: { type: String, required: true}
}, { timestamps: true})

export default mongoose.model("Store", storeSchema) 