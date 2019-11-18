import express from 'express';
import externalTasks from './ExternalTasks/tasks';
import { CronJob } from 'cron';
import chalk from 'chalk';

const app = express();

const PORT = 4000;

const job = new CronJob('0 */1 * * * *', () => {
    console.log('should run job every 1 minute');
    externalTasks.startProcess();
});

job.start();

app.listen(PORT, () => {
    console.log(chalk.green('App listening on PORT', PORT));
});
