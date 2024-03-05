export enum ToDoStatus {
  PENDING = 'Pending',
  IN_PROGRESS = 'In_Progress',
  COMPLETED = 'Completed',
}
export interface TodoTask {
  id: string;
  title: string;
  description: string;
  status: ToDoStatus;
}
