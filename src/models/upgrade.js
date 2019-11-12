'use strict';
module.exports = (sequelize, DataTypes) => {
  const upgrade = sequelize.define('upgrade', {
    processId: DataTypes.UUID,
    userDetails: DataTypes.JSONB
  }, {});
  upgrade.associate = function(models) {
    // associations can be defined here
  };
  return upgrade;
};