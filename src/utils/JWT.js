/* eslint-disable no-undef */
const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET;

const genToken = (payload) => {
  // Gera um token
  const token = jwt.sign(payload, secret, { algorithm: "HS256" });
  return { token };
};

const verToken = (token) => {
  // Verifica se um token é valido
  const verify = jwt.verify(token, "ToFalingInLoveAgain");
  // Retorna o token traduzido
  return verify;
};

const extToken = (auth) => {
  // Remove o token do formato Bearer: "token"
  const extract = auth.split(" ")[1];
  return extract;
};

module.exports = {
  genToken,
  verToken,
  extToken,
};