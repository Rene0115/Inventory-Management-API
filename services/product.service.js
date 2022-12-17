/* eslint-disable class-methods-use-this */
import productModel from '../models/product.model';

class ProductService {
  async create(data) {
    const product = await productModel.create(data);
    return product;
  }
}
export default new ProductService();
