import { Options } from "sequelize";

const config: Options = {
  database: process.env.ENV_DATABASE || 'makeUrTasks',
  password: process.env.ENV_PASSWORD || 'password',
  host: process.env.ENV_HOST || 'localhost',
  username: process.env.ENV_USER || 'root',
  port: Number(process.env.ENV_PORT) || 3307,
  dialect: 'mysql'
}

export = config;