import db from '../models/index';
import chalk from 'chalk';


const updateDb = async (id) => {
    try {
        await db.ExternalTasks.update(
            { isCompleted: true },
            { where: { taskId: id } },
        )
    } catch (error) {
        console.log('update failed', error);
    }
};

export default updateDb;
