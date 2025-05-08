import mongoose from "mongoose";

const ventaSchema = mongoose.Schema(
  {
    idAlumno: { type: String, required: true },
    subtotal: { type: Number, required: true},
    fecha: { type: Date, required: true},
  },
  { timestamps: true }
);

export default mongoose.model("Venta", ventaSchema);
