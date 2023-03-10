/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
import productModel from '../models/product.model.js';

class ProductService {
  async create(data) {
    const product = await productModel.create(data);
    return product;
  }

  async findById(id) {
    const product = await productModel.findOne({ _id: id });
    return product;
  }

  async findAndDeleteById(id) {
    const product = await productModel.findByIdAndDelete(id);
    return product;
  }

  async getProductByCategory(data) {
    const product = await productModel.find({ category: data });
    return product;
  }

  async getProducts() {
    const products = await productModel.find({});
    return products;
  }

  async deleteByCategory(data) {
    const product = await productModel.deleteMany({ category: data });
    return product;
  }
}
export default new ProductService();
