"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Tellies", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      type: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      totalBedrooms: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      totalBathrooms: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      occupancy: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      streetAddress: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      zip: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      state: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      available: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      internet: {
        type: Sequelize.BOOLEAN,
      },
      airConditioning: {
        type: Sequelize.BOOLEAN,
      },
      wifi: {
        type: Sequelize.BOOLEAN,
      },
      tv: {
        type: Sequelize.BOOLEAN,
      },
      washerDryer: {
        type: Sequelize.BOOLEAN,
      },
      gym: {
        type: Sequelize.BOOLEAN,
      },
      kitchen: {
        type: Sequelize.BOOLEAN,
      },
      freeParking: {
        type: Sequelize.BOOLEAN,
      },
      essentials: {
        type: Sequelize.BOOLEAN,
      },
      pool: {
        type: Sequelize.BOOLEAN,
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      hostId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Users" },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Tellies");
  },
};
