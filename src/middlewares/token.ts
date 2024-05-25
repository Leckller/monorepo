import { NextFunction, Response } from "express";
import { JWT } from "../utils";
import UserModel from "../database/models/User.model";
import { ReqUser } from "../types/User";

const model = new UserModel();

export default async (req: ReqUser, res: Response, next: NextFunction) => {
  const { auth } = req.headers;
  try {
    const extractToken = JWT.extToken(auth as string);
    const noAuthToken = JWT.verToken(extractToken);

    if (!model.EmailExists(noAuthToken.email)) return res.status(404).json({ message: "Login inválido" });

    req.userLogin = noAuthToken;
  } catch (err) {
    return res.status(400).json("Senha ou Login Incorretos");
  }
  next();
};