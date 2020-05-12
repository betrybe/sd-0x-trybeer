'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('orders', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      address_street: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      address_number: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      delivered: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        default: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: { model: 'users', foreign_key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        alllowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        alllowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('orders');
  },
};
