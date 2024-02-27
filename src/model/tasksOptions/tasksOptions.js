const connection = require("../../db/connection");

const insertTaskOption = async (taskId, urgent = false, important = false) => {
  const [query] = await connection
    .execute(`INSERT INTO tasks_options (task_id, urgent, important)
    VALUES (?,?,?)`, [taskId, urgent, important]);
  return query.insertId;
};

const selectTasksOptions = async (urgent = false, important = false) => {
  if (urgent) {
    const [query] = await connection.execute(`SELECT 
  tk.task_name, tk.date, tk.limit_date
  FROM tasks AS tk
      JOIN tasks_options AS tko ON tk.id = tko.task_id
  WHERE
      tko.urgent = TRUE`);
    return query;
  }
  if (important) {
    const [query] = await connection.execute(`SELECT 
  tk.task_name, tk.date, tk.limit_date
  FROM tasks AS tk
      JOIN tasks_options AS tko ON tk.id = tko.task_id
  WHERE
      tko.important = TRUE`);
    return query;
  }
  if (important) {
    const [query] = await connection.execute(`SELECT 
  tk.task_name, tk.date, tk.limit_date
  FROM tasks AS tk
      JOIN tasks_options AS tko ON tk.id = tko.task_id
  WHERE
      tko.important = TRUE && tko.urgent = TRUE`);
    return query;
  }
  const [query] = await connection.execute(`SELECT 
  tk.task_name, tk.date, tk.limit_date
  FROM tasks AS tk
      JOIN tasks_options AS tko ON tk.id = tko.task_id
  `);
  return query;
};

module.exports = {
  insertTaskOption,
  selectTasksOptions
};