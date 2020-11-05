'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class businessuser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  businessuser.init({
    userId: DataTypes.INTEGER,
    businessId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'businessuser',
  });
  return businessuser;
};