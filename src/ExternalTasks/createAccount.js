import { Variables } from "camunda-external-task-client-js";
import { client } from '../helpers/client';
import db from '../models';
import { errorHandler } from '../helpers/errorHandler';


const createAccount = {
  create: async () => {
    client.subscribe("Create Account", async function ({ task, taskService }) {
      let variable = new Variables();       
      try {
        const userDetails = task.variables.getAll();

        await db.CreateAccount.create({
          processId: task.processInstanceId,
          userDetails
        });

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
