import { client } from '../helpers/client';
import { errorHandler } from '../helpers/errorHandler';
import saveToDb from '../models';

const ussd = {
  register: () => {
    client.subscribe("USSD", async function ({ task, taskService }) {
      try {
        const variable = task.variables.get("requestussd");
        await saveToDb('ussd', task);

        await taskService.complete(task, variable);
      } catch(error) {
        errorHandler(error, taskService, task);
      }
    });
  },
};

export default ussd;
