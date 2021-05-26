'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Routes_Climbed = sequelize.define('Routes_Climbed', {
    route_id: {
      type: DataTypes.INTEGER,
      // references: {
      //   model: "Route",
      //   key: 'id'
      // },
    },
    climb_id: {
      type: DataTypes.INTEGER,
      // references: {
      //   model: "Climb",
      //   key: 'id'
      // },
    },
  });

   Routes_Climbed.associate = function(models) {
  };
  return Routes_Climbed;
};
