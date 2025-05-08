import mongoose from "mongoose";

const salesSchema = new mongoose.Schema({
    articulo: {type: String, required: true},
    precio: {type: Number, required: true},
    idComprador: {type: String, required: true},
    nombreComprador: {type: String, required: true}
}, {timestamps: true});

export default mongoose.model("Sales", salesSchema);