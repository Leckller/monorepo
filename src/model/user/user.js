const connection = require("../../db/connection");

const selectUsers = async (id = 0) => {
  if (id === 0) {
    const [query] = await connection.execute("SELECT * FROM users");
    return query;
  }
  const [query] = await connection.execute("SELECT * FROM users WHERE id = ?", [id]);
  return query;
};

const insertUser = async (user_name, email) => {
  const [query] = await connection.execute("INSERT INTO users (user_name, email) VALUES (?, ?)", [user_name, email]);
  // Retorna o id do user criado
  return query.insertId;
};

const updateUser = async (id, user_name, email) => {
  if (user_name && email) {
    const [query] = await connection.execute(`
  UPDATE users SET user_name = ?, email = ? WHERE id = ?;`, [user_name, email, id]);
    return query;
  }
  if (user_name) {
    const [query] = await connection.execute(`
    UPDATE users SET user_name = ? WHERE id = ?;`, [user_name, id]);
    return query;
  }
  const [query] = await connection.execute(`
    UPDATE users SET email = ? WHERE id = ?;`, [email, id]);
  return query;
};

module.exports = {
  insertUser,
  selectUsers,
  updateUser
};