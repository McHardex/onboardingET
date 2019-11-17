import db from '../models/index';

const saveToDb = async (task) => {
  const {
    id,
    topicName,
    activityId,
    activityInstanceId,
    errorMessage,
    errorDetails,
    executionId,
    lockExpirationTime,
    processDefinitionId,
    processDefinitionKey,
    processInstanceId,
    retries,
    suspended,
    workerId,
    tenantId,
    priority,
    businessKey
  } = task;
  // const userDetails = task.variables.getAll();
  
  await db.ExternalTasks.create({
    taskId: id,
    topicName,
    activityId,
    activityInstanceId,
    errorMessage,
    errorDetails,
    executionId,
    lockExpirationTime,
    processDefinitionId,
    processDefinitionKey,
    processInstanceId,
    retries,
    suspended,
    workerId,
    tenantId,
    priority,
    businessKey
  });
};

export default saveToDb;