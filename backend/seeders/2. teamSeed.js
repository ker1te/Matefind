module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Teams', [{
			name: 'Q-Vira',
			avatar: 'cat.jpg',
			description: 'Best',
			createdAt: new Date(),
			updatedAt: new Date()
		}]);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Teams', null, {});
	}
};
