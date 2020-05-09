import Product from '../models/Product';

class ProductController {
  async index(req, res) {
    const products = await Product.findAll();

    return res.json({
      products,
    });
  }

  async show(req, res) {
    const product = await Product.findByPk(req.params.id);

    if (!product) {
      return res.status(400).json({ error: 'Produto não existe' });
    }

    return res.json({
      product,
    });
  }
}

export default new ProductController();
