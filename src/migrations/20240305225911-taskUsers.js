"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("taskUsers", {
      taskId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        field: "task_id",
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
        field: "user_id",
        references: {
          model: "users",
          key: "id"
        }
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("taskUsers");
  }
};
