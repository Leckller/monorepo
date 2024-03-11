"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nickName: {
        unique: true,
        type: Sequelize.STRING
      },
      email: {
        unique: true,
        type: Sequelize.STRING,
      },
      password: Sequelize.STRING
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("users");
  }
};
