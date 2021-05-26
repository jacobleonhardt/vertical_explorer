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

  Type.associate = function(models) {
    Type.belongsTo(models.Route, { foreignKey: 'type_id' })
  };
  return Type;
};
