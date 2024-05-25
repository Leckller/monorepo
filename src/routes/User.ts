import { Router } from "express";
const routerUser = Router();
import UserController from "../controller/user"

const controller = new UserController();

routerUser.post('/cadastro', controller.cadastro)

routerUser.post('/login', controller.login)

export default routerUser;