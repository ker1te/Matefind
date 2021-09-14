import { Sequelize } from "sequelize";
const { DataTypes, Model } = require('sequelize');
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


export class UserClass {
    name: string;
    avatar: string;
    games: [];
    description: string;
    email: string;
    passwordHash: string;

    constructor(userData: any) {
        this.name = userData.username;
        this.avatar = '../assets/cat.jpg';
        this.games = [];
        this.description = '';
        this.email = userData.email;
        this.passwordHash = userData.password
    }
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
    email: {
        type: DataTypes.STRING
    },
    passwordHash: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'Users'
});
