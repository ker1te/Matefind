const { DataTypes } = require('sequelize');
import { sequelize } from "../../Server";

export interface UserInterface {
    id?: number;
    name: string;
    avatar: string;
    games: [];
    description: string;
    email: string;
    passwordHash: string;
}

export const UserModel = sequelize.define('User', {
    name: {
        type: DataTypes.STRING
    },
    avatar: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    isAdmin: {
        type: DataTypes.BOOLEAN
    },
    email: {
        type: DataTypes.STRING
    },
    passwordHash: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'Users'
});
