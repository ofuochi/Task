import { inject, injectable } from 'inversify';

import { TYPES } from '../DI/types';
import { ReadTodoDto } from '../Todo/Dtos/read-todo.dto';
import { ITodoClient } from '../Todo/services/ITdoClient';
import { IApiManager } from './IApiManager';

@injectable()
export class ApiManager implements IApiManager<ReadTodoDto> {
  private _todoClient: ITodoClient;
  public constructor(@inject(TYPES.TodoClient) todoClient: ITodoClient) {
    this._todoClient = todoClient;
  }

  fetchData(): Promise<ReadTodoDto[]> {
    return this._todoClient.getTodos();
  }
}
