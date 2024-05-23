/* eslint-disable no-undef */
import { UserWithNoId } from '../src/database/models/ModelsSequelize/User.Sequelize';
import jwt from 'jsonwebtoken'

const secret = process.env.JWT_SECRET as string;

const genToken = (payload: UserWithNoId) => {
  // Gera um token
  const token = jwt.sign(payload, secret, { algorithm: "HS256" });
  return { token };
};

const verToken = (token: string) => {
  // Verifica se um token é valido
  const verify = jwt.verify(token, secret);
  // Retorna o token traduzido
  return verify;
};

const extToken = (auth: string) => {
  // Remove o token do formato Bearer: "token"
  const extract = auth.split(" ")[1];
  return extract;
};

module.exports = {
  genToken,
  verToken,
  extToken,
};