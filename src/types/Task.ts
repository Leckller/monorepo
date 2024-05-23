export default interface Task {
  id: number;
  taskName: string;
  deadline: Date;
  description: string;
  completed: boolean
}