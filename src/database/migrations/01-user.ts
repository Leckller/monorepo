import { DataTypes, Model, QueryInterface } from "sequelize"
import { User } from "../../types";

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<User>>('users', {
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
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('users');
  },
}