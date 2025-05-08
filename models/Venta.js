import mongoose from "mongoose";

const ventaSchema = mongoose.Schema({
    producto: { type: String, required: true},
    cantidad: { type: Number, required: true},
    total: { type: Number, required: true},
    idAlumno: {type: String , required:true}
}, { timestamps: true})

export default mongoose.model("Venta", ventaSchema)