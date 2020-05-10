'use strict';
module.exports = (sequelize, DataTypes) => {
  const carrier = sequelize.define('carrier', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    mc: DataTypes.STRING,
    dot: DataTypes.STRING,
    country: DataTypes.STRING,
    fax: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});
  carrier.associate = function(models) {
    // associations can be defined here
  };
  return carrier;
};