import { client } from '../helpers/client';
import { errorHandler } from '../helpers/errorHandler';
import saveToDb from '../helpers/saveToDb';

const profileSmsAndEmailAlert = {
  send: () => {
    client.subscribe("SMS", async function ({ task, taskService }) {
      try {
        const variable = task.variables.get("requestalert");
        await saveToDb('sms', task);

        await taskService.complete(task, variable);
      } catch(error) {
        errorHandler(error, taskService, task);
      }
    });
  },
}


export default profileSmsAndEmailAlert;
