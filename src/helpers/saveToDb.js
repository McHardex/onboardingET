import db from '../models';

const saveToDb = async (task) => {
    const userDetails = task.variables.getAll();

    await db.ExternalTasks.create({
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
    });
};

export default saveToDb;