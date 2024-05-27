import { Request } from "express";
import { UserWithNoId } from "../database/models/ModelsSequelize/User.Sequelize";
import { messageService } from ".";

export default interface User {
  id: number,
  email: string,
  password: string,
}

export interface ReqUser extends Request {
  userLogin: User
}

export interface UserServiceInt {
  cadastro(fields: UserWithNoId): Promise<messageService<string>>
  login(fields: UserWithNoId): Promise<messageService<string>>
}