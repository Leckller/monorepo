const connection = require("../../db/connection");

const insertTaskOption = async (taskId, urgent = false, important = false) => {
  const [query] = await connection
    .execute(`INSERT INTO tasks_options (task_id, urgent, important)
    VALUES (?,?,?)`, [taskId, urgent, important]);
  return query.insertId;
};

const selectTasksOptions = async (urgent = false) => {
  const [query] = await connection.execute();
  return query;
};

module.exports = {
  insertTaskOption,
  selectTasksOptions
};