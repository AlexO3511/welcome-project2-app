'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Business extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Business.belongsTo(models.User,{
        through: "businessuser",
        foreignKey: "businessId",
        otherKey: "userId",
      }); 
     }
   };
  Business.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    website: DataTypes.STRING,
    imageLink: DataTypes.STRING,
    services: DataTypes.STRING,
    businessId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Business',
  });
  return Business;
};