import mongoose from "mongoose";

const ventaSchema = mongoose.Schema(
  {
    producto: { type: String, required: true },
    cantidad: { type: Number, required: true },
    precio: { type: Number, required: true },
    fecha: { type: Date, default: Date.now },
    alumnoId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Alumno",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Venta", ventaSchema);
