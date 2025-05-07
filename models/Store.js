import mongoose from "mongoose";

const storeSchema = mongoose.Schema({
    idStore: { type: Number, required: true},
    storeLocation: { type: String, required: true}
}, { timestamps: true})

export default mongoose.model("Store", storeSchema)