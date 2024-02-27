const connection = require("../../db/connection");

const selectTaskByUser = async (nickName) => {
  const [query] = connection.execute(`SELECT us.user_name, tk.task_name, tk.date, tk.limitDate
  FROM
      user_tasks AS ut
      JOIN tasks AS tk ON ut.task_id = tk.id
      JOIN users AS us ON ut.user_id = us.id
  WHERE
      us.user_name = ?;
  `, [nickName]);
  return query;
};

module.exports = {
  selectTaskByUser
};