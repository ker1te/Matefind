const { DataTypes } = require('sequelize');
import { sequelize } from "../../Server";

export interface TeamInterface {
		id?: number;
		name: string;
		avatar: string;
		description: string;
}

export const TeamModel = sequelize.define('Team', {
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
		tableName: 'Teams'
});

export const TeamUsersModel = sequelize.define('TeamUsers', {
		teamId: {
				type: DataTypes.INTEGER
		},
		userId: {
				type: DataTypes.INTEGER
		}
}, {
		tableName: 'TeamUsers'
})
