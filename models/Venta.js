import mongoose from "mongoose";

const salesSchema = mongoose.Schema({
    idUsuario: { type: String, required: true},
    nombre: { type: String, required: true},
    importe: {type: Number, required: true},
    fecha: { type: Date, requerid: true},
}, { timestamps: true})

export default mongoose.model("Venta", salesSchema)