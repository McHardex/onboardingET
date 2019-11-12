import db from '../models';

const saveToDb = async (dbName, task) => {
    const userDetails = task.variables.getAll();

    await db[dbName].create({
      processId: task.processInstanceId,
      userDetails
    });
};

export default saveToDb;