import Product from '../models/Product';
import Order from '../models/Order';
import OrderItem from '../models/OrderItem';
import Sequelize from 'sequelize';

import db from '../../database';
import * as Yup from 'yup';

class OrderController {
  async index(req, res) {
    const orders = await Order.findAll({
      where: { user_id: req.userId },
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

  async store(req, res) {
    const schema = Yup.object({
      address_street: Yup.string().required(),
      address_number: Yup.string().required(),
      items: Yup.array().of(
        Yup.object({
          product_id: Yup.number().required(),
          amount: Yup.number().required(),
        })
      ),
    });

    schema.validate(req.body).catch(function (e) {
      console.log(e);
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Dados inválidos' });
    }

    const { address_street, address_number, items } = req.body;

    async function validateProducts() {
      return Sequelize.Promise.map(items, async (item) => {
        const product = await Product.findByPk(item.product_id);

        return product;
      });
    }

    await validateProducts().then((items) => {
      if (items.includes(null)) {
        return res.status(400).json({ error: 'Produtos inválidos' });
      }
    });

    const sequelize = db.connection;

    return sequelize
      .transaction({ autocommit: false }, function (t) {
        return Order.create(
          {
            address_street,
            address_number,
            delivered: false,
            user_id: req.userId,
          },
          { transaction: t }
        ).then((order) => {
          return Sequelize.Promise.map(items, (item) => {
            return OrderItem.create(
              {
                product_id: item.product_id,
                order_id: order.get('id'),
                amount: item.amount,
              },
              { transaction: t }
            );
          });
        });
      })
      .then(function (data) {
        return res.status(200).json();
      })
      .catch(function (err) {
        return res.status(403).json();
      });
  }
}

export default new OrderController();
