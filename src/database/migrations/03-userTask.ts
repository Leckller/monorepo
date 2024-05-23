import { DataTypes, Model, QueryInterface } from "sequelize"
import { TaskUser } from "../../types";

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<TaskUser>>('task_users', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER
      },
      taskId: {
        type: DataTypes.INTEGER,
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
        type: DataTypes.INTEGER,
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
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('task_users');
  },
}