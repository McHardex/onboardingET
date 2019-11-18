import { Variables } from "camunda-external-task-client-js";
import { client } from '../helpers/client';
import { errorHandler, taskError } from '../helpers/errorHandler';
import fetchExternalTasks from '../helpers/getExternalTasks';
import saveToDb from '../helpers/saveToDb';
import afterAlienWorker from './afterAlienWorker';

const topicNames = [];
const ExternalTask = {
  startProcess: async () => {

    // Fetch active external tasks from camunda
    const res = await fetchExternalTasks();

    // Persist each instance of an external task in the db
    for(const tasks of res) {
      await saveToDb(tasks);
    }

    // Filter topics to avoid adding duplicates
    const newTopics = await res.filter(topic => {
      if (!topicNames.includes(topic.topicName)) {
        return topic;
      }
    });
    
    // Subscribe to topics
    for (const item of newTopics) {
      topicNames.push(item.topicName);
      try {
        client.subscribe(item.topicName, async function ({ task, taskService }) {
          const variable = new Variables();
          const data = await afterAlienWorker.pickup();

          for (const item of data) {
            const variableKey = Object.keys(item.inputVariable);
            const variableValue = Object.values(item.inputVariable);
            variable.set(variableKey, variableValue[0]);

            if (task.id === item.taskId) {
              await taskService.complete(task, variable);
            }
          }
        });
      } catch (error) {
        errorHandler(error);
      }
      return topicNames;
    }
  }
}

export default ExternalTask;
