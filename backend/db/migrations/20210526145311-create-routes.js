'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Routes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      location: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      difficulty: {
        type: Sequelize.DECIMAL(4,2),
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{model: 'Users'},
      },
      type_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{model: 'Types'},
      },
      height: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      favorite: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      photo: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Routes');
  }
};
