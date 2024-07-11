import { Options } from "sequelize";

const config: Options = {
  database: process.env.MYSQL_DATABASE || 'makeUrTasks',
  password: process.env.MYSQL_PASSWORD || 'password',
  host: process.env.MYSQL_HOST || 'localhost',
  username: process.env.MYSQL_USER || 'root',
  port: Number(process.env.MYSQL_PORT) || 3307,
  dialect: 'mysql'
}

export = config;