import { Router } from "express";
import routerTask from "./Task";
import routerUser from "./User";
import { token as tokenMiddleware } from "../middlewares";
import { ReqUser } from "../types/User";

const mainRouter = Router();

mainRouter.use('/user', routerUser);

mainRouter.use((req, res, next) => { tokenMiddleware(req as ReqUser, res, next) });
mainRouter.use('/task', routerTask);

export default mainRouter;