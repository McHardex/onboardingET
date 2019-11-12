'use strict';
module.exports = (sequelize, DataTypes) => {
  const request = sequelize.define('request', {
    processId: DataTypes.UUID,
    userDetails: DataTypes.JSONB
  }, {});
  request.associate = function(models) {
    // associations can be defined here
  };
  return request;
};