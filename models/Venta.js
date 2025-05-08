import mongoose from "mongoose";

const ventaSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
    fecha: { type: Date, required: true },
    precio: { type: Number, required: true }
}, { timestamps: true });

export default mongoose.model("Venta", ventaSchema);
