"use strict";
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define(
    "Booking",
    {
      userId: DataTypes.INTEGER,
      tellyId: DataTypes.INTEGER,
      startDate: DataTypes.DATE,
      endDate: DataTypes.DATE,
      total: DataTypes.INTEGER,
    },
    {}
  );
  Booking.associate = function (models) {

  };
  return Booking;
};
