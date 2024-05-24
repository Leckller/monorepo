import User, { UserServiceInt } from "./User";
import TaskUser from "./TaskUser";
import Task from "./Task";

export type messageService<T> = {
  data: T,
  message: string
}

export { User, UserServiceInt }
export { TaskUser }
export { Task }
