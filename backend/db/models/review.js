"use strict";
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define(
    "Review",
    {
      bookingId: DataTypes.INTEGER,
      rating: DataTypes.INTEGER,
      comment: DataTypes.TEXT,
      userId: DataTypes.INTEGER,
    },
    {}
  );
  Review.associate = function (models) {};
  return Review;
};
