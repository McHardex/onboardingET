'use strict';
module.exports = (sequelize, DataTypes) => {
  const notifyCustomer = sequelize.define('notifyCustomer', {
    processId: DataTypes.UUID,
    userDetails: DataTypes.JSONB
  }, {});
  notifyCustomer.associate = function(models) {
    // associations can be defined here
  };
  return notifyCustomer;
};