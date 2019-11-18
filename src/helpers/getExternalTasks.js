import axios from 'axios';
import chalk from 'chalk';

const fetchExternalTasks = async () => {
    try {
        const res = await axios.get('http://localhost:8080/engine-rest/external-task');
        if (!res.data.length > 0) {
            console.log(chalk.blue('No Active task yet'));
            return;
        } else {
            return res.data;
        }
    } catch (error) {
        console.log(chalk.red(error.message));
    }
};

export default fetchExternalTasks;
