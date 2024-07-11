import { TaskWithNoId } from '../../src/database/models/ModelsSequelize/Task.Sequelize'

export default class TaskMock {
  public validTask: TaskWithNoId = {
    id: 1,
    taskName: "Caminhar 5km",
    completed: false,
    deadline: new Date(),
    description: "Na rua da caminhada; às 20:00H",
    userId: 1
  }

  public editValidTask: TaskWithNoId = {
    id: 1,
    taskName: "Caminhar 10km",
    completed: false,
    deadline: "2024-05-25T18:43:18.626Z" as unknown as Date,
    description: "Na rua da caminhada; às 16:00H",
    userId: 1
  }

  public invalidNameTask: TaskWithNoId = {
    taskName: "sono",
    completed: false,
    deadline: new Date(),
    description: "Blablablabla",
    userId: 1
  }
}