import axios from 'axios';
import supertest from 'supertest';

import app from '../src/app';
import { ReadTodoDto } from '../src/Todo/Dtos/read-todo.dto';

const mockTodo: ReadTodoDto = {
  id: 1,
  title: 'test',
  completed: false,
  userId: 1,
};

describe('/GET Todos', () => {
  const request = supertest(app);

  it('returns 200 with list of todos', async () => {
    jest.spyOn(axios, 'get').mockResolvedValue({ data: [mockTodo] });

    const response = await request.get('/todos');

    expect(response.status).toBe(200);
  });

  it('returns 500 with error', async () => {
    jest.spyOn(axios, 'get').mockRejectedValue({ message: 'error' });

    const response = await request.get('/todos');

    expect(response.status).toBe(500);
    expect(response.body.message).toBe('error');
  });
});
