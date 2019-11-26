import express from 'express';
import externalTasks from './ExternalTasks/tasks';
import { CronJob } from 'cron';
import chalk from 'chalk';

const app = express();
const PORT = 4000;

// restart process every one minute
const job = new CronJob('0 */1 * * * *', () => {
    externalTasks.startProcess();
});

job.start();

app.listen(PORT, () => {
    console.log(chalk.green('App listening on PORT', PORT));
});
