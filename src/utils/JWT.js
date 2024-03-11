/* eslint-disable no-undef */
const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET;

const genToken = (payload) => {
  const token = jwt.sign(payload, secret, { algorithm: "HS256" });
  return { token };
};

const verToken = (token) => {
  const verify = jwt.verify(token, secret);
  return verify;
};

const extToken = (auth) => {
  const extract = auth.split(" ")[1];
  return extract;
};

module.exports = {
  genToken,
  verToken,
  extToken,
};