const { task } = require("../models");

const verifyFieldsLogin = async (body) => {
  const { email, password, nickName } = body;
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !regexEmail.test(email)) return {
    status: 400, message: "Insira um Email valido"
  };
  if (!password || password.length < 8) return {
    status: 400, message: "Insira uma Senha valida"
  };
  if (!nickName) return {
    status: 400, message: "Insira um NickName"
  };
  const nickExists = await task.findOne({ nickName });
  if (nickExists) return {
    status: 226, message: `Ops... o nickName ${nickName} já está em uso`
  };
  return false;
};

module.exports = {
  verifyFieldsLogin
};