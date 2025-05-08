import mongoose from "mongoose";


const NegocioSchema = mongoose.Schema({
    id: { type: Number, required: true},
    nombre: { type: String, required: true},
    storeLocation: { type: String, required: true},
}, { timestamps: true})


export default mongoose.model("Negocio", NegocioSchema)