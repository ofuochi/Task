import axios from 'axios';
import { injectable } from 'inversify';

import { ReadTodoDto } from '../Dtos/read-todo.dto';
import { ITodoClient } from './ITdoClient';

// This can be in a .env file but for the sake of simplicity I'll keep it here
// Also made it a method so that it can be easily tested
const getApiEndpoint = (): string =>
  process.env.TODO_API_ENDPOINT || 'https://jsonplaceholder.typicode.com/todos';

@injectable()
export class TodoClient implements ITodoClient {
  async getTodos(): Promise<ReadTodoDto[]> {
    const { data } = await axios.get<ReadTodoDto[]>(getApiEndpoint());
    return data;
  }

  async getTodo(id: number): Promise<ReadTodoDto> {
    const { data } = await axios.get<ReadTodoDto>(`${getApiEndpoint()}/${id}`);
    return data;
  }

  async addTodo(todo: ReadTodoDto): Promise<ReadTodoDto> {
    const { data } = await axios.post<ReadTodoDto>(getApiEndpoint(), todo);
    return data;
  }

  async deleteTodo(id: number): Promise<void> {
    await axios.delete(`${getApiEndpoint()}/${id}`);
  }

  async updateTodo(todo: ReadTodoDto): Promise<ReadTodoDto> {
    const { data } = await axios.put<ReadTodoDto>(
      `${getApiEndpoint()}/${todo.id}`,
      todo,
    );
    return data;
  }
}
