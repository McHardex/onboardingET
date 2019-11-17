module.exports = (sequelize, DataTypes) => {
  const ExternalTasks = sequelize.define('ExternalTasks', {
    id: DataTypes.UUID,
    topicName: DataTypes.STRING,
    inputVariable: DataTypes.JSONB,
    readyForPickup: DataTypes.STRING,
    responseCode: DataTypes.INTEGER,
    activityId: DataTypes.STRING,
    tenantId: DataTypes.UUID,
    activityInstanceId: DataTypes.STRING,
    executionId: DataTypes.UUID,
    lockExpirationTime: DataTypes.DATE,
    processDefinitionId: DataTypes.STRING,
    processDefinitionKey: DataTypes.STRING,
    processInstanceId: DataTypes.UUID,
    suspended: DataTypes.BOOLEAN,
    workerId: DataTypes.STRING,
    priority: DataTypes,INTEGER,
    businessKey: DataTypes.UUID,
    retries: DataTypes.INTEGER,
    errorMessage: DataTypes.STRING,
    errorDetails: DataTypes.STRING,
  }, {});
  ExternalTasks.associate = function(models) {
    // associations can be defined here
  };
  return ExternalTasks;
};

