import mongoose from "mongoose";

const saleSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true },
  date: { type: Date, required: true,  }
}, { timestamps: true});

export default mongoose.model('Sale', saleSchema);