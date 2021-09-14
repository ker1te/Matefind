module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [{
            name: 'keritea',
            avatar: 'cat.jpg',
            email: 'example@example.com',
            description: '',
            isAdmin: true,
            passwordHash: 'e10adc3949ba59abbe56e057f20f883e',
            createdAt: new Date(),
            updatedAt: new Date()
        }]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    }
};
