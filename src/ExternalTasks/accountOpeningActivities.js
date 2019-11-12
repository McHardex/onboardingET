import { client } from '../helpers/client';
import { errorHandler } from '../helpers/errorHandler';
import saveToDb from '../helpers/saveToDb';

const accountOpeningActivities = {
  start: () => {
    client.subscribe("Start post account", async function ({ task, taskService }) {
      try {
        await saveToDb('startPostAccount', task);
        
        await taskService.complete(task);
      } catch(error) {
        errorHandler(error, taskService, task);
      }
    });
  },
}

export default accountOpeningActivities;
