const connection = require("../db/connection");

module.exports = async (id, table) => {
  const [verifyId] = connection.execute("SELECT * FROM ? WHERE id = ?", [table, id]);
  if (!verifyId) {
    return false;
  }
  return true;
};
