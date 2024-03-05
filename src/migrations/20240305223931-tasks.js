"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Tasks", {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER
      },
      taskName: {
        type: Sequelize.STRING
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("Tasks");
  }
};
