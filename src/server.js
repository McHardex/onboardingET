import express from 'express';
import externalTasks from './ExternalTasks';

const app = express();

const PORT = 4000;

externalTasks.startProcess();
// External tasks
// externalTasks.rejectedTaskRecord()
// externalTasks.notifyOnAccountOpeningError(),
// externalTasks.validateId(),
// externalTasks.upgrade(),
// externalTasks.requestDebitCard()
// externalTasks.registerUssd(),
// externalTasks.sendSmsAndEmailAlert(),
// externalTasks.sendAccountNumber(),
// externalTasks.accountOpeningActivities()

app.listen(PORT, () => {
    console.log('App listening on PORT', PORT);
});
