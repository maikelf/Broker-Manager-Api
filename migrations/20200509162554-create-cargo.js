'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('cargos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      customer: {
        type: Sequelize.STRING
      },
      trailer: {
        type: Sequelize.STRING
      },
      fp: {
        type: Sequelize.STRING
      },
      size: {
        type: Sequelize.REAL
      },
      weigth: {
        type: Sequelize.REAL
      },
      temp: {
        type: Sequelize.STRING
      },
      point: {
        type: Sequelize.TEXT
      },
      gross: {
        type: Sequelize.STRING
      },
      sold: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      author: {
        type: Sequelize.STRING
      },
      company: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('cargos');
  }
};