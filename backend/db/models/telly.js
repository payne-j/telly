"use strict";
module.exports = (sequelize, DataTypes) => {
  const Telly = sequelize.define(
    "Telly",
    {
      name: DataTypes.STRING,
      type: DataTypes.STRING,
      totalBedrooms: DataTypes.INTEGER,
      totalBathrooms: DataTypes.INTEGER,
      occupancy: DataTypes.INTEGER,
      streetAddress: DataTypes.STRING,
      city: DataTypes.STRING,
      zip: DataTypes.INTEGER,
      state: DataTypes.STRING,
      description: DataTypes.TEXT,
      available: DataTypes.BOOLEAN,
      internet: DataTypes.BOOLEAN,
      airConditioning: DataTypes.BOOLEAN,
      wifi: DataTypes.BOOLEAN,
      tv: DataTypes.BOOLEAN,
      washerDryer: DataTypes.BOOLEAN,
      gym: DataTypes.BOOLEAN,
      kitchen: DataTypes.BOOLEAN,
      freeParking: DataTypes.BOOLEAN,
      essentials: DataTypes.BOOLEAN,
      pool: DataTypes.BOOLEAN,
      price: DataTypes.INTEGER,
      hostId: DataTypes.INTEGER,
    },
    {}
  );
  Telly.associate = function (models) {
    Telly.hasMany(models.Booking, { foreignKey: "tellyId" });
    Telly.hasMany(models.Photo, { foreignKey: "tellyId" });
  };
  return Telly;
};
