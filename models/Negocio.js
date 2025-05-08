import mongoose from "mongoose";

const negocioSchema = mongoose.Schema({
    nombre: { type: String, required: true},
    localidad: { type: String, required: true},
    direccion: { type: String, required: true}
}, { timestamps: true })

export default mongoose.model("Negocio", negocioSchema)