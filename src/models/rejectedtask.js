'use strict';
module.exports = (sequelize, DataTypes) => {
  const RejectedTask = sequelize.define('RejectedTask', {
    processId: DataTypes.UUID,
    userDetails: DataTypes.JSONB
  }, {});
  RejectedTask.associate = function(models) {
    // associations can be defined here
  };
  return RejectedTask;
};