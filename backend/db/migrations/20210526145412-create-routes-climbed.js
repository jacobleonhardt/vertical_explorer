'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Routes_Climbeds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      route_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model:'Routes'},
      },
      climb_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model:'Climbs'},
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
    await queryInterface.dropTable('Routes_Climbeds');
  }
};
