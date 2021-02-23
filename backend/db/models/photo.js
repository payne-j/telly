"use strict";
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define(
    "Photo",
    {
      tellyId: DataTypes.INTEGER,
      imageUrl: DataTypes.TEXT,
    },
    {}
  );
  Photo.associate = function (models) {
    Photo.belongsTo(models.Telly, { foreignKey: "tellyId" });
  };
  return Photo;
};
