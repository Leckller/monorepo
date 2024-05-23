import { DataTypes, Model, QueryInterface } from "sequelize"
import { Task } from "../../types";

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<Task>>('tasks', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER
      },
      taskName: {
        type: DataTypes.STRING
      },
      deadline: {
        type: DataTypes.DATE
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true
      },
      completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('tasks');
  },
}