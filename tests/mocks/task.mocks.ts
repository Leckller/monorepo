import { TaskWithNoId } from '../../src/database/models/ModelsSequelize/Task.Sequelize'

export default class TaskMock {
  public validTask: TaskWithNoId = {
    taskName: "Caminhar 5km",
    completed: false,
    deadline: new Date(),
    description: "Na rua da caminhada; às 20:00H",
    checks: [{ completed: false, text: "Beber uma garrafa d'agua" }]
  }

  public invalidNameTask: TaskWithNoId = {
    taskName: "sono",
    completed: false,
    deadline: new Date(),
    description: "Blablablabla",
    checks: []
  }
}