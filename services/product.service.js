/* eslint-disable class-methods-use-this */
import productModel from '../models/product.model';

class ProductService {
  async create(data) {
    const product = await productModel.create(data);
    return product;
  }

  async findById(id) {
    const product = await productModel.findOne({ _id: id });
    return product;
  }
}
export default new ProductService();
