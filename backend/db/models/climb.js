'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Climb = sequelize.define('Climb', {
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "User",
        key: 'id'
      },
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

  Climb.prototype.toSafeObject = function() { // remember, this cannot be an arrow function
    const { user_id, name, notes, climb_height } = this;
    return { user_id, name, notes, climb_height };
  };

  Climb.add = async function ({ user_id, name, notes, climb_height }) {

    const climb = await Climb.create({
      user_id,
      name,
      notes,
      climb_height
    });

    const newClimb = climb.dataValues;
    return await Climb.findByPk(newClimb.id);
  };


  Climb.list = async function (id) {
    return await Climb.findAll({ where: {
        user_id: id
      }, order: [
      ['createdAt', 'DESC'],
  ], });
  };

  Climb.delete = async function (id) {
    const remove = await Climb.findByPk(id);
    Climb.destroy({where : {id: remove.id}});
  }

  Climb.associate = function(models) {
    Climb.belongsTo(models.User, { foreignKey: 'user_id' })
    const through = {
      through: 'Routes_Climbed',
      foreignKey: 'climb_id',
      otherKey: 'route_id',
    };
    Climb.belongsToMany(models.Route, through)
  };

  return Climb;
};
