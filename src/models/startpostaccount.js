'use strict';
module.exports = (sequelize, DataTypes) => {
  const startPostAccount = sequelize.define('startPostAccount', {
    processId: DataTypes.UUID,
    userDetails: DataTypes.JSONB
  }, {});
  startPostAccount.associate = function(models) {
    // associations can be defined here
  };
  return startPostAccount;
};