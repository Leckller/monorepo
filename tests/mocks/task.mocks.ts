import { TaskWithNoId } from '../../src/database/models/ModelsSequelize/Task.Sequelize'

export default class TaskMock {
  public validTask: TaskWithNoId = {
    id: 1,
    taskName: "Caminhar 5km",
    completed: false,
    deadline: new Date(),
    description: "Na rua da caminhada; às 20:00H",
    checks: [{ completed: false, text: "Beber uma garrafa d'agua" }],
    userId: 1
  }

  public editValidTask: TaskWithNoId = {
    id: 1,
    taskName: "Caminhar 10km",
    completed: false,
    deadline: new Date(),
    description: "Na rua da caminhada; às 16:00H",
    checks: [{ completed: false, text: "Beber uma garrafa d'agua" }],
    userId: 1
  }

  public invalidNameTask: TaskWithNoId = {
    taskName: "sono",
    completed: false,
    deadline: new Date(),
    description: "Blablablabla",
    checks: [],
    userId: 1
  }
}