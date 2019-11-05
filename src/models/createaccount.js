'use strict';
module.exports = (sequelize, DataTypes) => {
  const CreateAccount = sequelize.define('CreateAccount', {
    processId: DataTypes.UUID,
    userDetails: DataTypes.JSONB
  }, {});
  CreateAccount.associate = function(models) {
    // associations can be defined here
  };
  return CreateAccount;
};