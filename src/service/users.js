const { user } = require("../models");

const verifyFieldsLogin = async (body) => {
  const { email, password, nickName } = body;
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !regexEmail.test(email)) return {
    status: 400, message: "Insira um Email valido"
  };
  if (!password || password.length < 8) return {
    status: 400, message: "Insira uma Senha valida"
  };

  const userExists = await user.findOne({ where: { email } });
  if (userExists) return { status: 400, message: "Este Email já está cadastrado" };

  if (!nickName) return {
    status: 400, message: "Insira um NickName"
  };

  const nickExists = await user.findOne({ where: { nickName } });
  if (nickExists) return {
    status: 226, message: `Ops... o nickName ${nickName} já está em uso`
  };
  return false;
};

module.exports = {
  verifyFieldsLogin
};