import { client } from '../helpers/client';
import { errorHandler } from '../helpers/errorHandler';

const accountOpeningActivities = {
  start: () => {
    client.subscribe("Start post account", async function ({ task, taskService }) {
      try {
        await taskService.complete(task);
        console.log('task completed');
      } catch(error) {
        console.log('something happend');
        errorHandler(error, taskService, task);
      }
    });
  },
}

export default accountOpeningActivities;
