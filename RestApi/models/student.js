'use strict';
const {
  Model, cast
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Student.init({
    name: DataTypes.STRING,
    sem: DataTypes.INTEGER,
    branch: DataTypes.STRING
  }, {
    sequelize,
    paranoid : true,
    
    timestamps:true,
    modelName: 'Student',
  });
  return Student;
};


