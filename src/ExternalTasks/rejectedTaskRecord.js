import { client } from '../helpers/client';
import { errorHandler, taskError } from '../helpers/errorHandler';

const rejectedTask = {
  record: () => {
    client.subscribe("Rejected Task", async function ({ task, taskService }) {
      try {
        const variable = task.variables.get("IsCompApproved");
        if (variable === false) {
          await taskService.complete(task, variable);
        } else {
          taskError(taskService);
        }
      } catch (error) {
        errorHandler(error, taskService, task);
      }
    });
  },
};

export default rejectedTask;
