'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'rocky@demo.com',
        username: 'Rocky',
        total_climbed: 5726,
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'user@test.com',
        username: 'Travis',
        total_climbed: 0,
        hashedPassword: bcrypt.hashSync('password1'),
      },
      {
        email: 'test@gmail.com',
        username: 'Evan',
        total_climbed: 9850,
        hashedPassword: bcrypt.hashSync('password2'),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Rocky', 'Travis', 'Evan'] }
    }, {});
  }
};
