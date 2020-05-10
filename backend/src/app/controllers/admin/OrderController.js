import Product from '../../models/Product';
import Order from '../../models/Order';
import OrderItem from '../../models/OrderItem';
import User from '../../models/User';

class OrderController {
  async index(req, res) {
    const user = await User.findByPk(req.userId);
    if (!user.admin) {
      return res.status(400).json({ error: 'Acesso bloqueado' });
    }

    const orders = await Order.findAll({
      include: {
        model: OrderItem,
        as: 'order_items',
        include: {
          model: Product,
          as: 'product',
        },
      },
    });

    return res.json(orders);
  }

  async show(req, res) {
    const user = await User.findByPk(req.userId);

    // if (!user.admin) {
    //   return res.status(400).json({ error: 'Acesso bloqueado' });
    // }

    const order = await Order.findByPk(req.params.id, {
      include: {
        model: OrderItem,
        as: 'order_items',
        include: {
          model: Product,
          as: 'product',
        },
      },
    });

    return res.json(order);
  }
}

export default new OrderController();
