const { DataTypes } = require('sequelize');
import { sequelize } from "../../Server";

export interface GameInterface {
    id?: number;
    name: string;
    avatar: string;
    description: string;
}

export const GameModel = sequelize.define('Game', {
    name: {
        type: DataTypes.STRING
    },
    avatar: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'Games'
});
