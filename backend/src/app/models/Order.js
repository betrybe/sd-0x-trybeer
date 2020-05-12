import Sequelize, { Model } from 'sequelize';

class Order extends Model {
  static init(sequelize) {
    super.init(
      {
        address_street: Sequelize.STRING,
        address_number: Sequelize.STRING,
        delivered: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    this.hasMany(models.OrderItem, {
      foreignKey: 'order_id',
      as: 'order_items',
    });
  }
}

export default Order;
