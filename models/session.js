'use strict';
module.exports = (sequelize, DataTypes) => {
  const session = sequelize.define('session', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    user: DataTypes.STRING
  }, {});
  session.associate = function(models) {
    // associations can be defined here
  };
  return session;
};