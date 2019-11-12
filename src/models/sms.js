'use strict';
module.exports = (sequelize, DataTypes) => {
  const sms = sequelize.define('sms', {
    processId: DataTypes.UUID,
    userDetails: DataTypes.JSONB
  }, {});
  sms.associate = function(models) {
    // associations can be defined here
  };
  return sms;
};