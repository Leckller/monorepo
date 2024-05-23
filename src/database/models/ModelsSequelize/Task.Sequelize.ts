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
    type: DataTypes.ARRAY,
    defaultValue: [],
    allowNull: true
  }
}, {
  tableName: 'tasks',
  timestamps: false,
});

export default SequelizeTask;
