'use strict';
module.exports = (sequelize, DataTypes) => {
  const company = sequelize.define('company', {
    email: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    name: DataTypes.STRING,
    logo: DataTypes.STRING,
    slogan: DataTypes.STRING,
    theme: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    zipcode: DataTypes.STRING,
    phone: DataTypes.STRING,
    mc: DataTypes.STRING,
    package: DataTypes.INTEGER,
    payinfo: DataTypes.STRING
  }, {});
  company.associate = function(models) {
    // associations can be defined here
  };
  return company;
};