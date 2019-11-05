'use strict';
module.exports = (sequelize, DataTypes) => {
  const AccountOpeningError = sequelize.define('AccountOpeningError', {
    processId: DataTypes.UUID,
    userDetails: DataTypes.JSONB
  }, {});
  AccountOpeningError.associate = function(models) {
    // associations can be defined here
  };
  return AccountOpeningError;
};