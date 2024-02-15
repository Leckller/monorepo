const connection = require("../db/connection");

const validateIds = async (req, res, next) => {
  const { selected } = req.body;

  selected.forEach(async id => {
    console.log(query)
    const query = await connection.execute(`DELETE FROM tasks WHERE id = ?`, [id]);
    if (!query) return res.status(404).json({ message: "Id não encontrado" });
  });

  next();
}

const validateIdParam = async (req, res, next) => {
  const { id } = req.params;
  if (isNaN(id)) return res.status(400).json({ message: "O id deve ser um número" })

  next();
}

module.exports = {
  validateIdParam,
  validateIds
}