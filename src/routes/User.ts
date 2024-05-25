import { Router } from "express";
const routerUser = Router();
import UserController from "../controller/user"

const controller = new UserController();

routerUser.use('/cadastro', controller.cadastro)

routerUser.use('/login', controller.login)

export default routerUser;