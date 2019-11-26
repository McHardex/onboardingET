import axios from 'axios';
import chalk from 'chalk';
import configJson from '../config/config';
const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
const configUrl = configJson[env];

const fetchExternalTasks = async () => {
    try {
        const res = await axios.get(`${configUrl.baseUrl}/external-task`);
        return res.data;
    } catch (error) {
        console.log(chalk.grey(error.message));
    }
};

export default fetchExternalTasks;
