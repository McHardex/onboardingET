import db from '../models/index';
import chalk from 'chalk';

const saveToDb = async (task, variables) => {
  try {
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

    const insertToDB = await db.ExternalTasks.create({
      taskId: id,
      topicName,
      activityId,
      variables,
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
    return insertToDB;
  } catch(error) {
    if (error.message === 'Validation error') {
      console.log(chalk.grey('Duplicate: Already persisted data in the database'));
    } else {
      console.log(error.message);
    }
  }
};

export default saveToDb;