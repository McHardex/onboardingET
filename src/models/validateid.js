'use strict';
module.exports = (sequelize, DataTypes) => {
  const validateId = sequelize.define('validateId', {
    processId: DataTypes.UUID,
    userDetails: DataTypes.JSONB
  }, {});
  validateId.associate = function(models) {
    // associations can be defined here
  };
  return validateId;
};