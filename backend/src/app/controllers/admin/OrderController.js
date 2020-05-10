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
      where: { delivered: false },
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

    if (!user.admin) {
      return res.status(400).json({ error: 'Acesso bloqueado' });
    }

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

  async markAsDelivered(req, res) {
    const user = await User.findByPk(req.userId);

    if (!user.admin) {
      return res.status(400).json({ error: 'Acesso bloqueado' });
    }

    const { id } = req.params;

    const order = await Order.findByPk(req.params.id);

    if (!order) {
      return res.status(400).json({ error: 'Pedido nào encontrado' });
    }

    if (order.delivered) {
      return res
        .status(400)
        .json({ error: 'Pedido já foi marcado como entregue' });
    }

    await order.update({
      delivered: true,
    });

    const orderUpdated = await Order.findByPk(req.params.id);

    return res.status(200).json(orderUpdated);
  }
}

export default new OrderController();
