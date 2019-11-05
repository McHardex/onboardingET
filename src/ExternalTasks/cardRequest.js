import { client } from '../helpers/client';
import { errorHandler } from '../helpers/errorHandler';

const cardRequest = {
  request: () => {
    client.subscribe("Request", async function ({ task, taskService }) {
      try {
        const variable = task.variables.get("requestcard");
        await taskService.complete(task, variable);
      } catch(error) {
        errorHandler(error, taskService, task);
      }
    });
  },
}


export default cardRequest;
