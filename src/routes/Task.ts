import { Router } from "express";
import TaskController from "../controller/task";
import { token } from "../middlewares";
import { ReqUser } from "../types/User";

const routerTask = Router();

const controller = new TaskController();

routerTask.post('/create', (req, res, next) => { token(req as ReqUser, res, next) } , controller.createTask)

routerTask.delete('/delete', controller.deleteTask)

routerTask.patch('/edit', controller.editTask)

routerTask.get('/', controller.getTasks)

export default routerTask;