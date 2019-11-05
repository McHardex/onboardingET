import { client } from '../helpers/client';
import { errorHandler } from '../helpers/errorHandler';

const profileSmsAndEmailAlert = {
  send: () => {
    client.subscribe("SMS", async function ({ task, taskService }) {
      try {
        const variable = task.variables.get("requestalert");
        await taskService.complete(task, variable);
      } catch(error) {
        errorHandler(error, taskService, task);
      }
    });
  },
}


export default profileSmsAndEmailAlert;
