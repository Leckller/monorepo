// const { task } = require("../models");


// const taskExistsById = async (id) => {
//   if (!id) return { status: 400, message: "Id não informado" };
//   const idExists = await task.findOne({ where: { id } });
//   return idExists ? { status: 200, message: idExists } : { status: 404, message: "Id não encontrado" };
// };

// module.exports = {
//   taskExistsById
// };