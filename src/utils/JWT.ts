/* eslint-disable no-undef */
import { UserWithNoId } from '../database/models/ModelsSequelize/User.Sequelize';
import jwt from 'jsonwebtoken'
require('dotenv/config');

const secret = process.env.JWT_SECRET as string || "itsNice";

const genToken = (payload: UserWithNoId): string => {
  // Gera um token
  const token = jwt.sign(payload, secret, { algorithm: "HS256" });
  return token;
};

const verToken = (token: string): UserWithNoId => {
  // Verifica se um token é valido
  const verify = jwt.verify(token, secret) as UserWithNoId;
  // Retorna o token traduzido
  return verify;
};

const extToken = (auth: string) => {
  // Remove o token do formato Bearer: "token"
  const extract = auth.split(" ")[1];
  return extract;
};

export default {
  genToken,
  verToken,
  extToken,
};