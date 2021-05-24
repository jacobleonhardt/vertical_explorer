'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Climb = sequelize.define('Climb', {
    user_id: {
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50],
        },
      },
    notes: {
      type: DataTypes.TEXT,
      validate: {
        len: [0, 255],
      },
    },
    climb_height: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

  });

  Climb.list = async function (id) {
    return await Climb.findAll({ where: {user_id: id}});
  };

  // User.getCurrentUserById = async function (id) {
  //   return await User.scope('currentUser').findByPk(id);
  // };

  Climb.associate = function(models) {
    Climb.belongsTo(models.User, { foreignKey: 'user_id' })
  };
  return Climb;
};
