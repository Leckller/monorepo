import { Request, Response } from "express";
import { UserService } from "../services";

const service = new UserService();

export default class UserController {

  async cadastro(req: Request, res: Response) {
    const { email, password } = req.body
    const { data, message, status } = await service.cadastro({ email, password })
    res.status(status).json({ data, message })
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body
    const { data, message, status } = await service.login({ email, password })
    res.status(status).json({ data, message })
  }
}
