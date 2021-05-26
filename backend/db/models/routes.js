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
      len: [1, 255],
      },
    },
  type_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "Type",
      key: 'id'
      },
    },
  height: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  difficulty: {
    type: DataTypes.DECIMAL(4,2),
  },
  favorite: {
    type: DataTypes.BOOLEAN,
  },
  photo: {
    type: DataTypes.STRING,
  }

});

Route.list = async function (id) {
  return await Route.findAll({ where: {
      user_id: id
    }, order: [
    ['createdAt', 'DESC'],
], });
};

Route.associate = function(models) {
  Route.belongsTo(models.User, { foreignKey: 'user_id' })
  Route.belongsTo(models.Type, { foreignKey: 'type_id' })
  const through = {
    through: 'Routes_Climbed',
    foreignKey: 'route_id',
    otherKey: 'climb_id',
  };
  Route.belongsToMany(models.Climb, through)
};
  return Route;
};
