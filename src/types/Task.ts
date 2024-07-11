interface checks {
  text: string,
  completed: boolean,
}

export default interface Task {
  id: number;
  taskName: string;
  deadline: Date;
  description: string;
  completed: boolean
  userId: number
}