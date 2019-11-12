'use strict';
module.exports = (sequelize, DataTypes) => {
  const ussd = sequelize.define('ussd', {
    processId: DataTypes.UUID,
    userDetails: DataTypes.JSONB
  }, {});
  ussd.associate = function(models) {
    // associations can be defined here
  };
  return ussd;
};