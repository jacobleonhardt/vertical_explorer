'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Climbs', [
    {
      id: 1,
      user_id: 24,
      name: 'Vertical Escape Night Climb',
      notes: 'climbed the chimney three times in the dark! (well... with a headlight)',
      climb_height: 90,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
},


down: (queryInterface, Sequelize) => {

}
};
