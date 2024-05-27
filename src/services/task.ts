import { TaskWithNoId } from "../database/models/ModelsSequelize/Task.Sequelize";
import TaskModel from "../database/models/Task.Model";
import { Task, messageService } from "../types";

const model = new TaskModel();

export default class TaskService {
  async createTask(fields: TaskWithNoId): Promise<messageService<boolean>> {
    const { userId, checks, completed, deadline, description, taskName, } = fields;
    if (taskName.length < 5) {
      return { data: false, message: "O nome da tarefa deve ter pelo menos 5 digitos.", status: 400 }
    }
    const data = await model.novaTarefa({
      userId, checks, completed, deadline, description, taskName,
    });
    if (!data) {
      return { data: false, message: "Parece que ocorreu algum problema", status: 400 }
    }
    return { data: true, message: "Tarefa criada.", status: 201 }
  }

  async deleteTask(tarefaId: number): Promise<messageService<boolean>> {
    const taskExists = await model.tarefaExists(tarefaId);
    if (!taskExists) {
      return { data: false, message: "Tarefa não encontrada", status: 404 }
    }
    await model.deletarTarefa(tarefaId)
    return { data: true, message: "Tarefa deletada.", status: 200 }
  }
  async editTask(fields: Task): Promise<messageService<boolean>> {
    const { checks, completed, deadline, description, id, taskName } = fields;
    const taskExists = await model.tarefaExists(id);
    if (!taskExists) {
      return { data: false, message: "Tarefa não encontrada", status: 404 }
    }

    const data = await model.editarTarefa({ checks, completed, deadline, description, taskName });
    if (!data) {
      return { data: false, message: "Ocorreu um erro durante a edição da tarefa.", status: 200 }
    }
    return { data: true, message: "Tarefa editada.", status: 200 }
  }

  async getTask(userId: number): Promise<messageService<Task[]>> {
    const data = await model.getTasks(userId) as Task[]
    return { data, message: "", status: 200 };
  }
}