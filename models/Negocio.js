import mongoose from "mongoose";

const negocioSchema = mongoose.Schema({
    nombre: { type: String, required: true },
    storeLocation: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model("Negocio", negocioSchema);