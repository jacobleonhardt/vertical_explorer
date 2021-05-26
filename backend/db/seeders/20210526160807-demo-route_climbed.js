'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Routes_Climbeds', [
      {route_id: 1, climb_id: 1, createdAt: new Date(), updatedAt: new Date(),},
      {route_id: 2, climb_id: 2, createdAt: new Date(), updatedAt: new Date(),},
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Routes_Climbeds', {
      id: { [Op.gt]: 0 }
    }, {});
  }
  };
