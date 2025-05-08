import mongoose from "mongoose";

const salesSchema = mongoose.Schema({
    alumnoId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Alumno', 
        required: true 
    },
    monto: { 
        type: Number, 
        required: true 
    },
    descripcion: { 
        type: String, 
        required: true 
    }
}, { timestamps: true });

export default mongoose.model("Sales", salesSchema); 