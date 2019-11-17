import express from 'express';
import externalTasks from './ExternalTasks/tasks';

const app = express();

const PORT = 4000;

externalTasks.startProcess();

app.listen(PORT, () => {
    console.log('App listening on PORT', PORT);
});
