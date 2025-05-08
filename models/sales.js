import mongoose from "mongoose";

const salesSchema = mongoose.Schema({
    IdComprador: { type: String, required: true},
    
}, { timestamps: true})

export default mongoose.model("Sale", salesSchema)