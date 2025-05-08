import mongoose from "mongoose";

const negocioSchema = mongoose.Schema(
  {
    storeLocation: { type: String, required: true },
    telefono: { type: String, required: true},
    direccion: { type: String, required: true},
  },
  { timestamps: true }
);

export default mongoose.model("Negocio", negocioSchema);