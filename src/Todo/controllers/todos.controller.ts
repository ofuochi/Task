import { Request, Response } from 'express';

import { IApiManager } from '../../Common/IApiManager';
import { container } from '../../DI/inversify.config';
import { TYPES } from '../../DI/types';
import { ReadTodoDto } from '../Dtos/read-todo.dto';

export const getTodos = async (_: Request, res: Response): Promise<void> => {
  try {
    const apiManager = container.get<IApiManager<ReadTodoDto>>(
      TYPES.ApiManager,
    );
    const todos = await apiManager.fetchData();
    res.status(200).send(todos);
  } catch (e) {
    // You won't typically send details of the error to the client.
    res.status(500).send(e);
  }
};

// Other controllers can be added here...
