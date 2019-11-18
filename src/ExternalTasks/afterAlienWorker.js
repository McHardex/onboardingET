import db from '../models/index';
import chalk from 'chalk';

const { ExternalTasks } = db;

const afterAlienWorker = {
    pickup: async () => {
        // Picks up after alien worker updates the db
        const pickup = await ExternalTasks.findAll({
            raw: true,
            where: {
                readyForPickup: "Y"
            },
        });

        if (!pickup.length > 0) {
            console.log(chalk.red('No task ready for pickup yet'));
            return;
        }
        return pickup;
    }
}

export default afterAlienWorker;
