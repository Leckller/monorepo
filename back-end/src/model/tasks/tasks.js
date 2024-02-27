const connection = require('../../db/connection');

const insertTask = async (name, data, limitData, importante, urgente) => {
  const [query] = await connection
    .execute('INSERT INTO tasks (name, data, limitData, important, urgente VALUES (?,?,?,?,?)', [name, data, limitData, importante, urgente]);
  return query.insertId;
}

const selectTask = async (id = 0) => {
  if (id === 0) {
    const [query] = await connection
      .execute('SELECT * FROM tasks');
    return query;
  }
  const [query] = await connection
    .execute('SELECT * FROM tasks WHERE id = ?', [id])
  return query;
}

module.exports = {
  insertTask,
  selectTask
}