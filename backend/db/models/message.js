'use strict';
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    subject: DataTypes.STRING,
    body: DataTypes.TEXT,
    senderId: DataTypes.INTEGER,
    recipientId: DataTypes.INTEGER
  }, {});
  Message.associate = function(models) {
    // associations can be defined here
  };
  return Message;
};