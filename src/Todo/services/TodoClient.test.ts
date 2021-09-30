import axios from 'axios';

import { container } from '../../DI/inversify.config';
import { TYPES } from '../../DI/types';
import { ReadTodoDto } from '../Dtos/read-todo.dto';
import { ITodoClient } from './ITdoClient';

describe('#TodoClient', () => {
  const mockTodo: ReadTodoDto = {
    id: 1,
    title: 'test',
    completed: false,
    userId: 1,
  };

  let todoClient: ITodoClient;

  beforeAll(() => {
    todoClient = container.get<ITodoClient>(TYPES.TodoClient);
    process.env.TODO_API_ENDPOINT = 'http://test-todo-url.com/todos';
  });

  beforeEach(() => jest.clearAllMocks());

  // Reset the env variables after all tests
  afterAll(() => (process.env.TODO_API_ENDPOINT = undefined));

  it('gets all todos', async () => {
    jest.spyOn(axios, 'get').mockResolvedValue({ data: [mockTodo] });

    expect(await todoClient.getTodos()).toEqual([mockTodo]);
    expect(axios.get).toHaveBeenNthCalledWith(
      1,
      'http://test-todo-url.com/todos',
    );
  });

  it('gets a todo', async () => {
    jest.spyOn(axios, 'get').mockResolvedValue({ data: mockTodo });

    expect(await todoClient.getTodo(1)).toEqual(mockTodo);
    expect(axios.get).toHaveBeenNthCalledWith(
      1,
      'http://test-todo-url.com/todos/1',
    );
  });

  it('adds a todo', async () => {
    jest.spyOn(axios, 'post').mockResolvedValue({ data: mockTodo });

    expect(await todoClient.addTodo(mockTodo)).toEqual(mockTodo);
    expect(axios.post).toHaveBeenNthCalledWith(
      1,
      'http://test-todo-url.com/todos',
      mockTodo,
    );
  });

  it('updates a todo', async () => {
    jest.spyOn(axios, 'put').mockResolvedValue({ data: mockTodo });

    expect(await todoClient.updateTodo(mockTodo)).toEqual(mockTodo);
    expect(axios.put).toHaveBeenNthCalledWith(
      1,
      'http://test-todo-url.com/todos/1',
      mockTodo,
    );
  });

  it('deletes a todo', async () => {
    jest.spyOn(axios, 'delete').mockImplementation(jest.fn());

    await todoClient.deleteTodo(3);

    expect(axios.delete).toHaveBeenNthCalledWith(
      1,
      'http://test-todo-url.com/todos/3',
    );
  });
});
