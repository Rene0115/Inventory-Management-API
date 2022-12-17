/* eslint-disable class-methods-use-this */
import _ from 'lodash';
import productService from '../services/product.service';

class ProductController {
  async create(req, res) {
    const data = {
      name: req.body.name,
      price: req.body.price,
      category: req.body.category
    };
    if (!data.name || !data.price || !data.category) {
      return res.status(404).send({
        success: false,
        message: 'must provide a name, price and category.'
      });
    }
    const post = productService.create(data);
    if (!post) {
      return res.status(404).send({
        success: false,
        message: 'product was not created'
      });
    }
    return res.status(200).send({
      success: true,
      message: 'product was successfully created.',
      data: post
    });
  }

  async updatePrice(req, res) {
    const product = await productService.findById(req.body.Id);
    const newPrice = req.body.price;
    if (_.isEmpty(product)) {
      return res.status(200).send({
        success: true,
        message: 'product does not exist'
      });
    }
    if (product) {
      await product.updateOne({ price: newPrice });
    }

    return res.status(200).send({
      success: true,
      message: `The new price is for your ${product.name} is ${newPrice}`
    });
  }

  async deleteProduct(req, res) {
    const product = await productService.findAndDeleteById(req.body.id);
    if (!product) {
      return res.status(404).send({
        success: false,
        message: 'Movie not deleted.'
      });
    }
    return res.status(200).send({
      success: true,
      message: 'Movie deleted successfully.'
    });
  }
}
export default new ProductController();
