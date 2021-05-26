'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Route = sequelize.define('Route', {
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "User",
      key: 'id'
    },
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [1, 50],
      },
    },
  height: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  difficulty: {
    type: DataTypes.DECIMAL(2,2),
    allowNull: false,
  },

});

Route.associate = function(models) {
  Route.belongsTo(models.User, { foreignKey: 'user_id' })
};
  return Route;
};
