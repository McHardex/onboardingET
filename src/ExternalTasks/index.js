import tasks from './tasks';
import createAccountError from './createAccountError';
import validateId from './validateId';
import upgradeToWta from './upgradeToWta';
import cardRequest from './cardRequest';
import ussd from './ussd';
import profileSmsAndEmailAlert from './profileSmsAndEmailAlert';
import notifyCustomer from './notifyCustomer';
import accountOpeningActivities from './accountOpeningActivities';
import rejectedTask from './rejectedTaskRecord';

const externalTasks = {
    startProcess: tasks.startProcess,
    notifyOnAccountOpeningError: createAccountError.notify,
    validateId: validateId.validate,
    upgrade: upgradeToWta.upgrade,
    requestDebitCard: cardRequest.request,
    registerUssd: ussd.register,
    sendSmsAndEmailAlert: profileSmsAndEmailAlert.send,
    sendAccountNumber: notifyCustomer.sendAcccountNumber,
    accountOpeningActivities: accountOpeningActivities.start,
    rejectedTaskRecord: rejectedTask.record
}

export default externalTasks;
