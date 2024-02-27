const model = require("../../model");

const insertTask = async (name, limitData, importante = false, urgente = false) => {
  if (!name) {
    return { status: "REQUIRED", data: { message: "Insira um nome" } };
  }
  if (!limitData) {
    return { status: "REQUIRED", data: { message: "Insira um tempo limite para a tarefa" } };
  }
  const data = new Date();
  const query = await model.task.insertTask(name, data, limitData, importante, urgente);
  return { status: "SUCCESS", data: query };
};

module.exports = {
  insertTask
};