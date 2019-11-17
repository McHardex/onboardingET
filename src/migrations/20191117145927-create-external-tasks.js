module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ExternalTasks', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      topicName: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true
      },
      inputVariable: {
        allowNull: true,
        type: Sequelize.JSONB,
      },
      readyForPickup: {
        allowNull: true,
        type: Sequelize.STRING,
        default: "N"
      },
      responseCode: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      activityId: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
      },
      tenantId: {
        allowNull: true,
        type: Sequelize.UUID,
        unique: true,
      },
      activityInstanceId: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
      },
      executionId: {
        allowNull: false,
        type: Sequelize.UUID,
        unique: true,
      },
      lockExpirationTime: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      processDefinitionId: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      processDefinitionKey: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      processInstanceId: {
        allowNull: false,
        type: Sequelize.UUID,
      },
      suspended: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      workerId: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      priority: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      businessKey: {
        allowNull: true,
        type: Sequelize.UUID,
      },
      retries: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      errorMessage: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      errorDetails: {
        allowNull: true,
        type: Sequelize.STRING,
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
    return queryInterface.dropTable('ExternalTasks');
  }
};