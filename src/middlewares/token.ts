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
    const userExists = await model.EmailExists(noAuthToken.email)

    if (!userExists.ok) return res.status(400).json({ data: "", message: "Senha ou Login Incorretos." });
    req.userLogin = {...noAuthToken, id: userExists.query?.id as number};
  } catch (err) {
    return res.status(400).json({ data: "", message: "Senha ou Login Incorretos." });
  }
  next();
};