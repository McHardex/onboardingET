import { client } from '../helpers/client';
import { errorHandler } from '../helpers/errorHandler';

const notifyCustomer = {
  sendAcccountNumber: () => {
    client.subscribe("Notify Customer", async function ({ task, taskService }) {
      try {
        await taskService.complete(task);
      } catch(error) {
        errorHandler(error, taskService, task);
      }
    });
  },
}


export default notifyCustomer;
