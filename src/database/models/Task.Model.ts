import { Task } from '../../types';
import SequelizeTask, { TaskWithNoId } from './ModelsSequelize/Task.Sequelize';

interface TaskMethods {
  novaTarefa(fields: TaskWithNoId, userId: number): Promise<TaskWithNoId>
  deletarTarefa(tarefaId: number): Promise<boolean>
  editarTarefa(fields: Task): Promise<boolean>
  tarefaExists(tarefaId: number): Promise<boolean>
  getTasks(userId: number): Promise<Task[]>
}

export default class TaskModel implements TaskMethods {
  private db = SequelizeTask;

  async tarefaExists(tarefaId: number): Promise<boolean> {
    const query = await this.db.findOne({ where: { id: tarefaId } })
    if (!query) return false;
    return true
  }

  async deletarTarefa(tarefaId: number): Promise<boolean> {
    await this.db.destroy({ where: { id: tarefaId } })
    return true;
  }

  async editarTarefa(fields: Omit<Task, "userId">): Promise<boolean> {
    const { completed, deadline, description, taskName, id} = fields
    try {
      await this.db.update({
       completed, deadline, description, taskName
      }, { where: { id } })
      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  async novaTarefa(fields: TaskWithNoId): Promise<TaskWithNoId> {
    const { completed, deadline, description, taskName, userId } = fields
    const query = await this.db.create({ completed, deadline, description, taskName, userId })
    return query.dataValues;
  }

  async getTasks(userId: number): Promise<any[]> {
    const query = await this.db.findAll({
      where: { userId },
    })
    return query;
  }

}