import { Client, logger } from "camunda-external-task-client-js";

// configuration for the Client:
const config = {
    baseUrl: "http://192.168.100.101:8080/engine-rest",
    use: logger,
    asyncResponseTimeout: 5000
};

export const client = new Client(config);
