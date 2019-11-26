import db from '../models/index';
import chalk from 'chalk';


const saveToDb = async (task) => {
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
    console.log(chalk.red('Already persisted process in the database'));
  }
};

export default saveToDb;