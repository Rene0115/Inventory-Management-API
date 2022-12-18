import mongoose from 'mongoose';

const product = new mongoose.Schema({

  category: {
    required: true,
    type: String
  },
  price: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  }
}, { timestamps: true });

export const ProductModel = mongoose.model('Product', product);

export default ProductModel;
