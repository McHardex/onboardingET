module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('notifyCustomers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      processId: {
        type: Sequelize.UUID,
        allowNull: false,
        unique: true
      },
      userDetails: {
        type: Sequelize.JSONB,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('notifyCustomers');
  }
};