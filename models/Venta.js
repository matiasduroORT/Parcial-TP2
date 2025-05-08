import mongoose from "mongoose";

const ventaSchema = mongoose.Schema({
  alumno: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Alumno",
    required: true
  },
  monto: {
    type: Number,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  estado: {
    type: String,
    enum: ['pendiente', 'completada', 'cancelada'],
    default: 'pendiente'
  }
}, { timestamps: true });

export default mongoose.model("Venta", ventaSchema);