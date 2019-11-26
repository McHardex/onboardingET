import db from '../models/index';
import chalk from 'chalk';

const { ExternalTasks } = db;
const afterAlienWorker = {
    pickup: async () => {
        // Picks up after alien worker updates the db
        const pickup = await ExternalTasks.findAll({
            raw: true,
            where: {
                readyForPickup: "Y",
                isCompleted: 0
            },
        });

        if (!pickup.length > 0) {
            console.log(chalk.grey('No task ready for pickup yet'));
            return;
        }
        return pickup;
    }
}

export default afterAlienWorker;
