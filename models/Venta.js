import mongoose from "mongoose";

const ventaSchema = mongoose.Schema({
    idAlumno: { type: String, required: true},
    fecha: { type: Date, required: true},
    precio: { type: Number, required: true},
}, { timestamps: true})


export default mongoose.model("Venta", ventaSchema)