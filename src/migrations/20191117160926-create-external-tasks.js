module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ExternalTasks', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      taskId: {
        allowNull: false,
        type: Sequelize.UUID,
        unique: true
      },
      topicName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      isCompleted: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      inputVariable: {
        allowNull: true,
        type: Sequelize.JSONB,
      },
      readyForPickup: {
        allowNull: true,
        type: Sequelize.STRING,
        defaultValue: "N"
      },
      responseCode: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      activityId: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      tenantId: {
        allowNull: true,
        type: Sequelize.UUID,
        unique: true,
      },
      activityInstanceId: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      executionId: {
        allowNull: false,
        type: Sequelize.UUID,
      },
      lockExpirationTime: {
        allowNull: true,
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