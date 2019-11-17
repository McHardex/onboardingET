import axios from 'axios';

const fetchExternalTasks = async () => {
    try {
        const res = await axios.get('http://localhost:8080/engine-rest/external-task');
        return res.data;
    } catch (error) {
        console.log(error.message);
    }
};

export default fetchExternalTasks;
