import { Client, logger } from "camunda-external-task-client-js";
import configJson from '../config/config';
const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
const configUrl = configJson[env];

// configuration for the Client:
const config = {
    baseUrl: configUrl.baseUrl,
    use: logger,
    asyncResponseTimeout: 5000
};

export const client = new Client(config);
