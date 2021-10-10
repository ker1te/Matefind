'use strict';

module.exports = {
	up: function (queryInterface, Sequelize) {
		return queryInterface.createTable('TeamUsers', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			teamId: {
				allowNull: false,
				type: Sequelize.INTEGER
			},
			userId: {
				allowNull: false,
				type: Sequelize.INTEGER
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
		return queryInterface.dropTable('TeamUsers');
	}
};
