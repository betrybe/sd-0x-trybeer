import Product from '../models/Product';

class ProductController {
  async index(req, res) {
    const products = await Product.findAll();

    return res.json({
      products,
    });
  }
}

export default new ProductController();
