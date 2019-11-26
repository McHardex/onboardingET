import axios from 'axios';
import chalk from 'chalk';

const fetchExternalTasks = async () => {
    try {
        const res = await axios.get('http://localhost:8080/engine-rest/external-task');
        return res.data;
    } catch (error) {
        console.log(chalk.grey(error.message));
    }
};

export default fetchExternalTasks;
