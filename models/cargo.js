'use strict';
module.exports = (sequelize, DataTypes) => {
  const cargo = sequelize.define('cargo', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    customer: DataTypes.STRING,
    trailer: DataTypes.STRING,
    fp: DataTypes.STRING,
    size: DataTypes.REAL,
    weigth: DataTypes.REAL,
    temp: DataTypes.STRING,
    point: DataTypes.TEXT,
    gross: DataTypes.STRING,
    sold: DataTypes.STRING,
    status: DataTypes.STRING,
    author: DataTypes.STRING,
    company: DataTypes.STRING
  }, {});
  cargo.associate = function(models) {
    // associations can be defined here
  };
  return cargo;
};