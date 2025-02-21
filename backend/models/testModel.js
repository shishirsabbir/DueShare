// imports
import { DataTypes, UUIDV4 } from 'sequelize';
import sequelize from './database.js';

// test model
const Test = sequelize.define('Test', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    firstName: {
        type: DataTypes.STRING,
    },
    lastName: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
    },
});

// exports
export default Test;
