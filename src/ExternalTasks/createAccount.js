import { Variables } from "camunda-external-task-client-js";
import { client } from '../helpers/client';
import saveToDb from '../helpers/saveToDb';
import { errorHandler } from '../helpers/errorHandler';


const createAccount = {
  create: async () => {
    client.subscribe("Create Account", async function ({ task, taskService }) {
      let variable = new Variables();       
      try {
        await saveToDb('CreateAccount', task);

        variable.set("accCreated", true);        
        await taskService.complete(task, variable);
      } catch (error) {
        variable.set("accCreated", false);        
        await taskService.complete(task, variable);
        errorHandler(error, taskService, task);
      };
    });
  },  
}


export default createAccount;
