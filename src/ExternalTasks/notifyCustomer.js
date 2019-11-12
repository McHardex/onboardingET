import { client } from '../helpers/client';
import saveToDb from '../helpers/saveToDb';
import { errorHandler } from '../helpers/errorHandler';

const notifyCustomer = {
  sendAcccountNumber: () => {
    client.subscribe("Notify Customer", async function ({ task, taskService }) {
      try {
        await saveToDb('notifyCustomer', task);

        await taskService.complete(task);
      } catch(error) {
        errorHandler(error, taskService, task);
      }
    });
  },
}


export default notifyCustomer;
