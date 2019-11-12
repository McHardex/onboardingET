import { client } from '../helpers/client';
import { errorHandler } from '../helpers/errorHandler';
import saveToDb from '../helpers/saveToDb';

const cardRequest = {
  request: () => {
    client.subscribe("Request", async function ({ task, taskService }) {
      try {
        const variable = task.variables.get("requestcard");
        await saveToDb('request', task);

        await taskService.complete(task, variable);
      } catch(error) {
        errorHandler(error, taskService, task);
      }
    });
  },
}


export default cardRequest;
