import { ReadTodoDto } from '../Dtos/read-todo.dto';

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface ITodoClient {
  getTodos(): Promise<ReadTodoDto[]>;
  getTodo(id: number): Promise<ReadTodoDto>;
  addTodo(todo: ReadTodoDto): Promise<ReadTodoDto>;
  updateTodo(todo: ReadTodoDto): Promise<ReadTodoDto>;
  deleteTodo(id: number): Promise<void>;
}
