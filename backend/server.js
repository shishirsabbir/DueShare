// configure environments
import dotenv from 'dotenv';
dotenv.config({ path: './apiConfig.env' });

// test config
// console.log(process.env.PORT);

// imports
import chalk from 'chalk';
import app from './app.js';
import sequelize from './models/database.js';

// starting server
const PORT = process.env.PORT;

// starting the server
async function startServer() {
    // sync models
    await sequelize.sync();

    // checking db connection
    try {
        await sequelize.authenticate();
        console.log('Database Connection Successful!');
    } catch (err) {
        console.log('Database Error!');
        console.error(err);
    }

    // listening to port
    app.listen(PORT, () => {
        console.log(chalk.bgCyanBright.redBright.bold(`Listening from port ${PORT}...`));
    });
}

// running the api
startServer();
