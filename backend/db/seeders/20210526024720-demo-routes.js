'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Climbs', [
      {
        id: 1,
        location: 'Vertical Escape BG',
        difficulty: 5.9,
        user_id: 1,
        height: 30,
        favorite: true,
        photo: '/home/leonhardt/soloProject/react_project/frontend/src/images/IMG_7583.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'Red River Gorge',
        difficulty: 5.7,
        user_id: 1,
        height: 55,
        favorite: false,
        photo: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Routes', {
      id: { [Op.gt]: 0 }
    }, {});
  }
  };
