const { task } = require("../models");

const taskExistsById = async (req, res, next) => {
  const { id } = req.params;

  if (!id) return res.status(400).json({ message: "Id não informado" });

  const idExists = await task.findOne({ where: { id } });
  if (!idExists) return res.status(404).json({ message: "Id não encontrado" });

  next();
};

module.exports = {
  taskExistsById
};