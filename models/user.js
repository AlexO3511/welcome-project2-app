'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsToMany(models.Business,{
        through: "businessuser",
        foreignKey: "userId",
        otherKey: "businessId",
      });
    }
  };
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    profession: DataTypes.STRING,
    almaMater: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};