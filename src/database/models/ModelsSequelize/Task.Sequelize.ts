import { DataTypes, Model, ModelDefined, Optional } from 'sequelize';
import db from '../index';
import { Task } from '../../../types';

export type TaskWithNoId = Optional<Task, 'id'>;
export type TaskModelType = Model<Task, TaskWithNoId>;
type TaskSequelizeCreate = ModelDefined<Task, TaskWithNoId>;

const SequelizeUser: TaskSequelizeCreate = db.define('Task', {
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
}, {
  tableName: 'tasks',
  timestamps: false,
});

export default SequelizeUser;
