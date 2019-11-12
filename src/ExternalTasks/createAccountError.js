import { client } from '../helpers/client';
import { errorHandler, taskError } from '../helpers/errorHandler';
import saveToDb from '../helpers/saveToDb';

const createAccountError = {
  notify: () => {
    client.subscribe("Account Opening Error", async function ({ task, taskService }) {
      try {
        const variable = task.variables.get("accCreated");
        if (variable === false) {
          await saveToDb('AccountOpeningError', task);
          
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
