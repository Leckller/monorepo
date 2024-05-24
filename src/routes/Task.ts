import { Request, Response, Router } from "express";

const routerTask = Router();

routerTask.post('/create', (req: Request, res: Response) => {
  res.status(200).json("Olá!")
})

routerTask.delete('/delete', (req: Request, res: Response) => {
  res.status(200).json("Olá!")
})

routerTask.patch('/edit', (req: Request, res: Response) => {
  res.status(200).json("Olá!")
})

routerTask.get('/', (req: Request, res: Response) => {
  res.status(200).json("Olá!")
})

export default routerTask;