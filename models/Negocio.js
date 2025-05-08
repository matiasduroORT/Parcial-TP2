import mongoose from "mongoose";

const negocioSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  ubicacion: {
    type: String,
    required: true
  },
  direccion: {
    type: String,
    required: true
  },
  telefono: {
    type: String
  },
  email: {
    type: String
  },
  activo: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

export default mongoose.model("Negocio", negocioSchema);