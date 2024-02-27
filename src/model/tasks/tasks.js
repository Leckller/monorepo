const connection = require("../../db/connection");

const insertTask = async (name, data, limitData, importante, urgente) => {
  const [query] = await connection
    .execute("INSERT INTO tasks (name, data, limit_data, important, urgente VALUES (?,?,?,?,?)", [name, data, limitData, importante, urgente]);
  return query.insertId;
};

//?
const selectTask = async (id = 0) => {
  if (id === 0) {
    const [query] = await connection
      .execute("SELECT * FROM tasks");
    return query;
  }
  const [query] = await connection
    .execute("SELECT * FROM tasks WHERE id = ?", [id]);
  return query;
};

const deleteTask = async (id) => {
  const [query] = await connection
    .execute("DELETE FROM tasks WHERE id = ?", [id]);
  return query;
};

const updateTask = async (id, task_name, limit_date) => {
  if (task_name && limit_date) {
    const [query] = await connection.execute(`
      UPDATE tasks SET task_name = ?, limit_date = ? 
      WHERE id = ?;`, [task_name, limit_date, id]);
    return query;
  }
  if (task_name) {
    const [query] = await connection.execute(`
      UPDATE tasks SET task_name = ? 
      WHERE id = ?;`, [task_name, id]);
    return query;
  }
  const [query] = await connection.execute(`
    UPDATE tasks SET limit_date = ? 
    WHERE id = ?;`, [limit_date, id]);
  return query;
};

module.exports = {
  insertTask,
  selectTask,
  deleteTask,
  updateTask
};