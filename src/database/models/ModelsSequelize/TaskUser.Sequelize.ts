import { DataTypes, Model, ModelDefined, Optional } from 'sequelize';
import db from '../index';
import { TaskUser } from '../../../types';
import SequelizeUser from './User.Sequelize';
import SequelizeTask from './Task.Sequelize';

export type TaskUserWithNoId = Optional<TaskUser, 'id'>;
export type TaskUserModelType = Model<TaskUser, TaskUserWithNoId>;
type TaskUserSequelizeCreate = ModelDefined<TaskUser, TaskUserWithNoId>;

const SequelizeTaskUser: TaskUserSequelizeCreate = db.define('task_users', {
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
    field: "task_id",
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
    field: "user_id",
    references: {
      model: "users",
      key: "id"
    }
  }
}, {
  tableName: 'task_users',
  timestamps: false,
});

SequelizeTaskUser.hasOne(SequelizeUser, { as: "user", foreignKey: "user_id" });
SequelizeTaskUser.hasOne(SequelizeTask, { as: "task", foreignKey: "task_id" })

export default SequelizeTaskUser;
