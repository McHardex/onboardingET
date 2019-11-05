import { client } from '../helpers/client';
import { errorHandler, taskError } from '../helpers/errorHandler';
import db from '../models';

const createAccountError = {
  notify: () => {
    client.subscribe("Account Opening Error", async function ({ task, taskService }) {
      try {
        const userDetails = task.variables.getAll();

        const variable = task.variables.get("accCreated");
        if (variable === false) {
          await db.AccountOpeningError.create({
            processId: task.processInstanceId,
            userDetails
          });
          
          await taskService.complete(task, variable);
        } else {
          taskError(taskService);
        }
      } catch (error) {
        errorHandler(error, taskService, task);
      };
    });
  },
};

export default createAccountError;
