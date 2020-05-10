'use strict';
module.exports = (sequelize, DataTypes) => {
  const broker = sequelize.define('broker', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    phone: DataTypes.STRING,
    ext: DataTypes.STRING,
    fax: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    zipcode: DataTypes.STRING
  }, {});
  broker.associate = function(models) {
    // associations can be defined here
  };
  return broker;
};