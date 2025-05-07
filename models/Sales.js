import mongoose from "mongoose";

const salesSchema = mongoose.Schema({
    id: { type: Number, required: true},
    idAlumno: { type: Number, required: true},
    amount: { type: Number, required: true},
    idStore: { type: Number, required: true}
}, { timestamps: true})

export default mongoose.model("Sales", salesSchema)