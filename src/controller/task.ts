import { Request, Response } from "express";
import { ReqUser } from "../types/User";
import TaskService from "../services/task";

const service = new TaskService();

export default class TaskController {

  async createTask(req: Request, res: Response) {
    const { userLogin: { id } } = req as ReqUser;
    const { completed, deadline, description, taskName } = req.body;
    console.log(id)
    const { data, message, status } = await service.createTask({ completed, deadline, description, taskName, userId: id });

    res.status(status).json({ data, message });
  }

  async getTasks(req: Request, res: Response) {
    const { userLogin: { id } } = req as ReqUser;
    const { data, message, status } = await service.getTask(id);
    res.status(status).json({ data, message });

  }

  async deleteTask(req: Request, res: Response) {
    const { taskId } = req.body;
    const { data, message, status } = await service.deleteTask(taskId);
    res.status(status).json({ data, message });

  }

  async editTask(req: Request, res: Response) {
    const { userLogin: { id } } = req as ReqUser;
    const {  completed, deadline, description, taskName } = req.body;

    const { data, message, status } = await service.createTask({ completed, deadline, description, taskName, userId: id });

    res.status(status).json({ data, message });

  }
}
