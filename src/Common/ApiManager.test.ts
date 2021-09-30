import { container } from '../DI/inversify.config';
import { TYPES } from '../DI/types';
import { ReadTodoDto } from '../Todo/Dtos/read-todo.dto';
import { TodoClient } from '../Todo/services/TodoClient';
import { IApiManager } from './IApiManager';

describe('#ApiManager', () => {
  let apiManager: IApiManager<ReadTodoDto>;
  const mockTodo: ReadTodoDto = {
    id: 1,
    title: 'test',
    completed: false,
    userId: 1,
  };

  beforeAll(() => {
    jest.spyOn(TodoClient.prototype, 'getTodos').mockResolvedValue([mockTodo]);
    apiManager = container.get<IApiManager<ReadTodoDto>>(TYPES.ApiManager);
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('fetches data from third party API', async () => {
    expect(await apiManager.fetchData()).toEqual([mockTodo]);
  });
});
