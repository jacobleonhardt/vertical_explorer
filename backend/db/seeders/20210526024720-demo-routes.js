'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Climbs', [
      {
        id: 1,
        location: 'Vertical Escape Bowling Green',
        difficulty: 5.9,
        user_id: 1,
        height: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'Red River Gorge',
        difficulty: 5.7,
        user_id: 1,
        height: 55,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
