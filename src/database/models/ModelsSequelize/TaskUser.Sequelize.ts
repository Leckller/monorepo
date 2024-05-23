import { DataTypes, Model, ModelDefined, Optional } from 'sequelize';
import db from '../index';
import { TaskUser } from '../../../types';

export type TaskUserWithNoId = Optional<TaskUser, 'id'>;
export type TaskUserModelType = Model<TaskUser, TaskUserWithNoId>;
type TaskUserSequelizeCreate = ModelDefined<TaskUser, TaskUserWithNoId>;

const SequelizeTaskUser: TaskUserSequelizeCreate = db.define('TaskUser', {
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
}, {
  tableName: 'TaskUsers',
  timestamps: false,
});

export default SequelizeTaskUser;
