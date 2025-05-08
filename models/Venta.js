import mongoose from "mongoose";

const ventaSchema = mongoose.Schema({
    usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: "Alumno", required: true },
    productos: [{ type: String, required: true }],
    total: { type: Number, required: true },
}, { timestamps: true });

export default mongoose.model("Venta", ventaSchema);