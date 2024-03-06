"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("task_users", {
      taskId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        field: "taskId",
        references: {
          model: "tasks",
          key: "id"
        }
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        field: "userId",
        references: {
          model: "users",
          key: "id"
        }
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("task_users");
  }
};
