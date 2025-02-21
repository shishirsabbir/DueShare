// imports
import { DataTypes, UUIDV4 } from 'sequelize';
import bcrypt from 'bcrypt';

import sequelize from './database.js';

// user model
const User = sequelize.define('User', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userName: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            min: 8,
        },
        set(value) {
            this.setDataValue('password', bcrypt.hashSync(value, 10));
        },
    },
});

// exports
export default User;
