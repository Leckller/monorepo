const idExists = require("../../utils/verifyId");

const verifyDataAndName = (req, res, next) => {
  const { data, limitData, name } = req.body;
  if (data >= limitData) {
    return res.status(400).json({ message: "Insira um tempo limite maior que a data de criação" });
  }
  if (name.length < 4 || name.length > 20) {
    return res.status(400).json({ message: "Insira um nome maior que 5 4 menor igual que 20 letras" });
  }
  next();
};

const verifyId = async (req, res, next) => {
  const { id } = req.params;
  if (!idExists(Number(id), "tasks")) {
    return res.status(404).json({ message: "Id não encontrado" });
  }
  next();
};

module.exports = {
  verifyDataAndName,
  verifyId
};