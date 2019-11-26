import { Variables } from "camunda-external-task-client-js";
import { client } from '../helpers/client';
import { errorHandler, taskError } from '../helpers/errorHandler';
import fetchExternalTasks from '../helpers/getExternalTasks';
import afterAlienWorker from '../helpers/afterAlienWorker';
import saveToDb from '../helpers/saveToDb';
import updateDb from '../helpers/updateDb';
import chalk from "chalk";

const topicNames = [];
const ExternalTask = {
  startProcess: async () => {

    // Fetch active external tasks from camunda
    const res = await fetchExternalTasks();

    if (!res.length > 0) {
      console.log(chalk.blue('No Active task yet'));
      return;
    }
    // Persist each instance of an external task in the db
    for (const tasks of res) {
      await saveToDb(tasks);
    }

    // Filter topics to avoid adding duplicates
    const newTopics = await res.filter(topic => {
      if (!topicNames.includes(topic.topicName)) {
        return topic;
      }
    });
    // Subscribe to topics
    for (const topic of newTopics) {
      topicNames.push(topic.topicName);
      try {
        client.subscribe(topic.topicName, async function ({ task, taskService }) {
          const variable = new Variables();
          const data = await afterAlienWorker.pickup();

          for (const item of data) {
            if (task.id === item.taskId) {
              if (item.inputVariable === null) {
                await taskService.complete(task);
                await updateDb(item.taskId);
              } else {
                const variableKey = Object.keys(item.inputVariable);
                const variableValue = Object.values(item.inputVariable);
                variable.set(variableKey, variableValue[0]);

                await taskService.complete(task, variable);
                await updateDb(item.taskId);
              }
            }
          }
        });
      } catch (error) {
        errorHandler(error);
      }
    }
  }
}

export default ExternalTask;
