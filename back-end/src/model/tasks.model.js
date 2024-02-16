const connection = require("../db/connection");

const getAllTasks = async () => {
  const [DB] = await connection.execute('SELECT * FROM tasks');
  return DB;
}

const getTasksByName = async (name) => {
  const [DB] = await connection.execute(`SELECT * FROM tasks WHERE task_name LIKE "%${name}%"`);
  return DB;
}

module.exports = {
  getAllTasks,
  getTasksByName
}