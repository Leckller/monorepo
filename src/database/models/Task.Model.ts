import SequelizeTask, { TaskWithNoId } from './ModelsSequelize/Task.Sequelize';
import SequelizeTaskUser from './ModelsSequelize/TaskUser.Sequelize';


interface TaskMethods {
  novaTarefa(fields: TaskWithNoId, userId: number): Promise<TaskWithNoId>
  deletarTarefa(tarefaId: number): Promise<boolean>
  editarTarefa(fields: TaskWithNoId): Promise<boolean>
  tarefaExists(tarefaId: number): Promise<boolean>
}

class TaskModel implements TaskMethods {
  private db = SequelizeTask;
  private bothDB = SequelizeTaskUser;

  async tarefaExists(tarefaId: number): Promise<boolean> {
    const query = await this.db.findOne({ where: { id: tarefaId } })
    if (!query) return false;
    return true
  }

  async deletarTarefa(tarefaId: number): Promise<boolean> {
    await this.db.destroy({ where: { id: tarefaId } })
    return true;
  }

  async editarTarefa(fields: TaskWithNoId): Promise<boolean> {
    const { completed, deadline, description, taskName, checks } = fields
    await this.db.update({
      checks, completed, deadline, description, taskName
    }, { where: { id: fields.id } })
    return true
  }

  async novaTarefa(fields: TaskWithNoId, userId: number): Promise<TaskWithNoId> {
    const { completed, deadline, description, taskName, checks } = fields
    const query = await this.db.create({ completed, deadline, description, taskName, checks })
    await this.bothDB.create({ taskId: query.dataValues.id, userId })
    return query.dataValues;
  }

}

export default new TaskModel()