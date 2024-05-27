import { Router } from "express";
import TaskController from "../controller/task";

const routerTask = Router();

const controller = new TaskController();

routerTask.post('/create', controller.createTask)

routerTask.delete('/delete', controller.deleteTask)

routerTask.patch('/edit', controller.editTask)

routerTask.get('/', controller.getTasks)

export default routerTask;