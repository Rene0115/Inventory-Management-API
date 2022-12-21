/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
import _ from 'lodash';
import productService from '../services/product.service.js';

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
    const post = await productService.create(data);
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
      return res.status(404).send({
        success: false,
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

  async updateCategory(req, res) {
    const product = await productService.findById(req.body.Id);
    const newCategory = req.body.category;
    if (_.isEmpty(product)) {
      return res.status(404).send({
        success: false,
        message: 'product does not exist'
      });
    }
    if (product) {
      await product.updateOne({ category: newCategory });
    }

    return res.status(200).send({
      success: true,
      message: `The new category is for your ${product.name} is ${newCategory}`
    });
  }

  async updateName(req, res) {
    const product = await productService.findById(req.body.Id);
    const newName = req.body.name;
    if (_.isEmpty(product)) {
      return res.status(404).send({
        success: false,
        message: 'product does not exist'
      });
    }
    if (product) {
      await product.updateOne({ name: newName });
    }

    return res.status(200).send({
      success: true,
      message: `Your products name was changed from ${product.name} to ${newName}`
    });
  }

  async getCategories(req, res) {
    const products = await productService.getProducts();
    const categories = Array.from(new Set(products.map((p) => p.category)));
    return res.status(200).send({
      success: true,
      data: categories
    });
  }

  async getByCategory(req, res) {
    const products = await productService.getProductByCategory(req.body.category);
    if (_.isEmpty(products)) {
      return res.status(404).send({
        success: false,
        message: 'Products with this category do not exist.'
      });
    }
    return res.status(200).send({
      success: true,
      data: products
    });
  }

  async deleteProduct(req, res) {
    const product = await productService.findAndDeleteById(req.body.Id);
    if (!product) {
      return res.status(404).send({
        success: false,
        message: 'Product not deleted.'
      });
    }
    return res.status(200).send({
      success: true,
      message: 'Product deleted successfully.'
    });
  }

  async deleteProductByCategory(req, res) {
    const product = await productService.deleteByCategory(req.body.category);
    if (!product) {
      return res.status(404).send({
        success: false,
        message: 'Something went wrong.'
      });
    }
    return res.status(200).send({
      success: true,
      message: 'Product deleted successfully.'
    });
  }
}
export default new ProductController();
