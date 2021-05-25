'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Climbs', [
    {
      id: 1,
      user_id: 1,
      name: 'Vertical Escape Night Climb',
      notes: 'climbed the chimney three times in the dark! (well... with a headlight)',
      climb_height: 90,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
      user_id: 1,
      name: 'Climbing with Will',
      notes: 'Speed climbed the blue wall. Lost to Will by 30 secs.',
      climb_height: 150,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
},


down: (queryInterface, Sequelize) => {
  const Op = Sequelize.Op;
  return queryInterface.bulkDelete('Climbs', {
    id: { [Op.gt]: 0 }
  }, {});
}
};
