import { client } from '../helpers/client';
import { errorHandler } from '../helpers/errorHandler';
import saveToDb from '../models';

const validateId = {
  validate: () => {
    client.subscribe("Validate ID", async function ({ task, taskService }) {
      try {
        await saveToDb('validateId', task);
        await taskService.complete(task);
      } catch(error) {
        errorHandler(error, taskService, task);
      }
    });
  },
}

export default validateId;
