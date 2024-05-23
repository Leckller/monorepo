import { DataTypes, Model, ModelDefined, Optional } from 'sequelize';
import db from '../index';
import { User } from '../../../types';

export type UserWithNoId = Optional<User, 'id'>;
export type UserModelType = Model<User, UserWithNoId>;
type UserSequelizeCreate = ModelDefined<User, UserWithNoId>;

const SequelizeUser: UserSequelizeCreate = db.define('User', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  email: {
    unique: true,
    type: DataTypes.STRING,
  },
  password: DataTypes.STRING
}, {
  tableName: 'users',
  timestamps: false,
});

export default SequelizeUser;
