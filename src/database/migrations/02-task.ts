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
        type: DataTypes.STRING,
        field: "task_name",
        allowNull: false,
      },
      deadline: {
        type: DataTypes.STRING,
        defaultValue: "01-02-2000"
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: ""
      },
      completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      userId: {
        type: DataTypes.INTEGER,
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
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('tasks');
  },
}