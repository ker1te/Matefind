'use strict';

module.exports = {
	up: function (queryInterface, Sequelize) {
		return queryInterface.createTable('Teams', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			name: {
				allowNull: false,
				type: Sequelize.STRING
			},
			avatar: {
				allowNull: false,
				type: Sequelize.STRING
			},
			description: {
				allowNull: false,
				type: Sequelize.STRING
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
		});
	},

	down: function (queryInterface, Sequelize) {
		return queryInterface.dropTable('Teams');
	}
};
