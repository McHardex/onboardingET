import { client } from '../helpers/client';
import { errorHandler, taskError } from '../helpers/errorHandler';
import saveToDb from '../helpers/saveToDb';

const upgradeToWta = {
  upgrade: () => {
    client.subscribe("Upgrade", async function ({ task, taskService }) {
      try {
        const variable = task.variables.get("requestcheq");
        if (variable) {
          await saveToDb('upgrade', task);
          await taskService.complete(task, variable);
        } else {
          taskError(taskService);
        }
      } catch(error) {
        errorHandler(error, taskService, task);
      }
    });
  },
}

export default upgradeToWta;
