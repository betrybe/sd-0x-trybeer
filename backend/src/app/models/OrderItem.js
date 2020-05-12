import Sequelize, { Model } from 'sequelize';

class OrderItem extends Model {
  static init(sequelize) {
    super.init(
      {
        amount: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Order, { foreignKey: 'order_id', as: 'order' });
    this.belongsTo(models.Product, { foreignKey: 'product_id', as: 'product' });
  }
}

export default OrderItem;
