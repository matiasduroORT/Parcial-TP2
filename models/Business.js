import mongoose from 'mongoose';

const businessSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  storeLocation: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
},{ timestamps: true});

export default mongoose.model('Business', businessSchema);

