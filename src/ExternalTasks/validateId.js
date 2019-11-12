import { client } from '../helpers/client';
import { errorHandler } from '../helpers/errorHandler';
import db from '../models';

const validateId = {
  validate: () => {
    client.subscribe("Validate ID", async function ({ task, taskService }) {
      try {
        const userDetails = task.variables.getAll();

        await db.validateId.create({
          processId: task.processInstanceId,
          userDetails
        });
        await taskService.complete(task);
      } catch(error) {
        console.log(error.message, 'error in validate id');
        errorHandler(error, taskService, task);
      }
    });
  },
}

export default validateId;
