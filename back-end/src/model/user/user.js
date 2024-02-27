const connection = require('../../db/connection');

const selectUsers = async (id = 0) => {
  if (id === 0) {
    const [query] = await connection.execute('SELECT * FROM users')
    return query;
  }
  const [query] = await connection.execute('SELECT * FROM users WHERE id = ?', [id])
  return query;
}

const insertUser = async (nickName, email) => {
  const [query] = await connection.execute('INSERT INTO users (nickName, email) VALUES (?, ?)', [nickName, email]);
  // Retorna o id do user criado
  return query.insertId;
}

module.exports = {
  insertUser,
  selectUsers
}