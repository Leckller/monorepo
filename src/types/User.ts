import { Request } from "express";
import { UserWithNoId } from "../database/models/ModelsSequelize/User.Sequelize";

export default interface User {
  id: number,
  email: string,
  password: string,
}

export interface ReqUser extends Request {
  userLogin: UserWithNoId
}