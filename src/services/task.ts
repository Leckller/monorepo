import { UserWithNoId } from "../database/models/ModelsSequelize/User.Sequelize";
import TaskModel from "../database/models/Task.Model";
import { ReqUser } from "../types/User";

const model = new TaskModel();

export default class TaskService {
  async createTask() { }
  async deleteTask() { }
  async editTask() { }
  async getTask(token: ReqUser) {
    const { userLogin } = token;
    console.log(userLogin)
    const data = await model.getTasks(userLogin.id)
    return data;
  }
}