'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('Users', {
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
            /* games: {
                allowNull: false,
                type: Sequelize.ARRAY
            }, */
            description: {
                allowNull: false,
                type: Sequelize.STRING
            },
            isAdmin: {
                type: Sequelize.BOOLEAN
            },
            email: {
                allowNull: false,
                type: Sequelize.STRING
            },
            passwordHash: {
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
        return queryInterface.dropTable('Users');
    }
};
