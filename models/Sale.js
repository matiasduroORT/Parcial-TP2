import mongoose from "mongoose";

const saleSchema = mongoose.Schema({
    alumno: { type: mongoose.Schema.Types.ObjectId, ref: 'Alumno', required: true},
    monto: { type: Number, required: true},
    fecha: { type: Date, default: Date.now},
    descripcion: { type: String, required: true}
}, { timestamps: true})

export default mongoose.model("Sale", saleSchema) 