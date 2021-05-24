'use strict';
// const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.com',
        username: 'Rocky',
        total_climbed: 5726,
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'tester@one.com',
        username: 'Travis',
        hashedPassword: bcrypt.hashSync('password1'),
      },
      {
        email: 'tester@two.com',
        username: 'Evan',
        hashedPassword: bcrypt.hashSync('password2'),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'Travis', 'Evan'] }
    }, {});
  }
};
