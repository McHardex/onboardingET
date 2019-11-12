import { client } from '../helpers/client';
import { errorHandler, taskError } from '../helpers/errorHandler';
import saveToDb from '../models';

const rejectedTask = {
  record: () => {
    client.subscribe("Rejected Task", async function ({ task, taskService }) {
      try {
        const variable = task.variables.get("IsCompApproved");
        if (variable === false) {
          await saveToDb('RejectedTask', task);
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
