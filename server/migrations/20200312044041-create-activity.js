module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('Activities', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        user_id: {
            allowNull: false,
            type: Sequelize.INTEGER,
        },
        target_id: {
            allowNull: false,
            type: Sequelize.INTEGER,
        },
        user_model_id: {
            allowNull: false,
            type: Sequelize.INTEGER,
        },
        target_model_id: {
            allowNull: false,
            type: Sequelize.INTEGER,
        },
        user_name: {
            allowNull: false,
            type: Sequelize.STRING,
        },
        target_name: {
            allowNull: false,
            type: Sequelize.STRING,
        },
        description: {
            allowNull: false,
            type: Sequelize.STRING,
        },
        created_at: {
            allowNull: false,
            type: Sequelize.DATE,
        },
        updated_at: {
            type: Sequelize.DATE,
        },
        deleted_at: {
            type: Sequelize.DATE,
        },
    }),
    // eslint-disable-next-line no-unused-vars
    down: (queryInterface, Sequelize) => queryInterface.dropTable('Activities'),
};
