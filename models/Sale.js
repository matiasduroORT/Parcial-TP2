import mongoose from "mongoose";

const saleSchema = mongoose.Schema({
    precio: { type: Number, required: true},
    producto: { type: String, required: true},
    idUsuario: { type: String, required: true}
}, { timestamps: true})

export default mongoose.model("Sale", saleSchema)
