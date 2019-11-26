import chalk from 'chalk';

export const errorHandler = async (error, taskService, task, variables) => {
    const { errorCode } = error;
    switch (errorCode) {
        case 'bpmn-error':
            await taskService.handleBpmnError(task, "BPMNError_Code", "Error message", variables);
            break;
        default:
            console.log(chalk.red(error.message));
            break;
    }
};

export const taskError = async (taskService) => {
    await taskService.handleFailure(task, {
        errorMessage: "something does not seem right",
        errorDetails: "some details",
        retries: 1,
        retryTimeout: 1000
    });
}
