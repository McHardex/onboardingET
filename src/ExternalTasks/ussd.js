import { client } from '../helpers/client';
import { errorHandler } from '../helpers/errorHandler';

const ussd = {
  register: () => {
    client.subscribe("USSD", async function ({ task, taskService }) {
      try {
        const variable = task.variables.get("requestussd");
        await taskService.complete(task, variable);
      } catch(error) {
        errorHandler(error, taskService, task);
      }
    });
  },
};

export default ussd;
