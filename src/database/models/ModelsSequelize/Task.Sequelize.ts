import { DataTypes, Model, ModelDefined, Optional } from 'sequelize';
import db from '../index';
import { Task } from '../../../types';

export type TaskWithNoId = Optional<Task, 'id'>;
export type TaskModelType = Model<Task, TaskWithNoId>;
type TaskSequelizeCreate = ModelDefined<Task, TaskWithNoId>;

const SequelizeTask: TaskSequelizeCreate = db.define('Task', {
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
    type: DataTypes.DATE,
    defaultValue: new Date()
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
  checks: {
    type: DataTypes.TEXT,
    defaultValue: "[]",
    allowNull: true
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
  tableName: 'tasks',
  timestamps: false,
});

export default SequelizeTask;
