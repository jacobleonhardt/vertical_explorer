'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Type = sequelize.define('Type', {
    name: {
      type: DataTypes.STRING,
      references: {
        model: "Route",
        key: 'id'
      },
    },
  });

  Type.list = async function (id) {
    return await Type.findAll();
  };

  Type.associate = function(models) {
    Type.hasMany(models.Route, { foreignKey: 'type_id' })
  };
  return Type;
};
