import { Variables } from "camunda-external-task-client-js";
import { client } from '../helpers/client';
import saveToDb from '../helpers/saveToDb';
import { errorHandler } from '../helpers/errorHandler';
import fetchExternalTasks from '../helpers/getExternalTasks';
 
const ExternalTask = {
  startProcess: async () => {
    let topicNames = new Set();
    let subscribedTopics = new Set();
    setInterval(async () => {
      const res = await fetchExternalTasks();
      for (const items of res) {
        topicNames.add(items.topicName);
      };

      try {
        if (res.length > 0) {
          for (const tasks of topicNames) {
            const subList = [...subscribedTopics];

            !subList.includes(tasks) &&
              client.subscribe(tasks, async function ({ task, taskService }) {
                console.log(task, 'task');
                // let variable = new Variables();
                // try {
                // await saveToDb('CreateAccount', task);

                //   variable.set("accCreated", true);
                //   await taskService.complete(task, variable);
                // } catch (error) {
                //   variable.set("accCreated", false);
                //   await taskService.complete(task, variable);
                //   errorHandler(error, taskService, task);
                // };

              });
            subscribedTopics.add(tasks);
          }
        } else {
          console.log('No Active task yet');
        }
      } catch (error) {
        console.log(error.message);
      }
    }, 12000);
  }
}

export default ExternalTask;
