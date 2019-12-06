import express from 'express';
import externalTasks from './ExternalTasks/tasks';
import chalk from 'chalk';
import cron from 'node-cron';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = 4000;

cron.schedule(process.env.CRON_TIME, () => {
    externalTasks.startProcess();
});

app.listen(PORT, () => {
    console.log(chalk.green('App listening on PORT', PORT));
});
