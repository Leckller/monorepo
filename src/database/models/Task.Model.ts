import SequelizeTask, { TaskWithNoId } from './ModelsSequelize/Task.Sequelize';


interface TaskMethods {
  novaTarefa(fields: TaskWithNoId): Promise<TaskWithNoId>
  deletarTarefa(tarefaId: number): Promise<boolean>
  editarTarefa(fields: TaskWithNoId): Promise<boolean>
  tarefaExists(tarefaId: number): Promise<boolean>
}

class TaskModel implements TaskMethods {
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

  async editarTarefa(fields: TaskWithNoId): Promise<boolean> {
    const { completed, deadline, description, taskName, checks } = fields
    await this.db.update({
      checks, completed, deadline, description, taskName
    }, { where: { id: fields.id } })
    return true
  }

  async novaTarefa(fields: TaskWithNoId): Promise<TaskWithNoId> {
    const { completed, deadline, description, taskName, checks } = fields
    const query = await this.db.create({ completed, deadline, description, taskName, checks })
    return query.dataValues;
  }

}

export default new TaskModel()