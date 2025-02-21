import { Sequelize } from 'sequelize';

// database config
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './data/test.db',
    logging: false,
});

// exports
export default sequelize;
