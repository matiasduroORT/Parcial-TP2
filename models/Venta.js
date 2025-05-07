import mongoose from "mongoose";
const { Schema } = mongoose;

const ventaSchema = mongoose.Schema({
    concepto: { type: String, required: true},
    precio: { type: Number, required: true},
    idAlumno: { type: Schema.Types.ObjectId, required: true},
    idNegocio: { type: Schema.Types.ObjectId, required: true}
}, { timestamps: true })

export default mongoose.model("Venta", ventaSchema)