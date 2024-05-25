import { Request, Response, Router } from "express";
import TaskService from "../services/task";
import { ReqUser } from "../types/User";

const routerTask = Router();

const service = new TaskService();

routerTask.post('/create', (req: Request, res: Response) => {
  res.status(200).json("Olá!")
})

routerTask.delete('/delete', (req: Request, res: Response) => {
  res.status(200).json("Olá!")
})

routerTask.patch('/edit', (req: Request, res: Response) => {
  res.status(200).json("Olá!")
})

routerTask.get('/', async (req, res: Response) => {
  const validate = await service.getTask(req as ReqUser)
  res.status(200).json(validate)
})

export default routerTask;