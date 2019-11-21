import axios from 'axios';
import chalk from 'chalk';

const fetchExternalTasks = async () => {
    try {
        const res = await axios.get('http://192.168.100.101:8080/engine-rest/external-task');
        return res.data;
    } catch (error) {
        console.log(chalk.red(error.message));
    }
};

export default fetchExternalTasks;
