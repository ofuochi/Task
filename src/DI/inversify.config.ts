import 'reflect-metadata';

import { Container } from 'inversify';

import { ApiManager } from '../Common/ApiManager';
import { IApiManager } from '../Common/IApiManager';
import { ReadTodoDto } from '../Todo/Dtos/read-todo.dto';
import { ITodoClient } from '../Todo/services/ITdoClient';
import { TodoClient } from '../Todo/services/TodoClient';
import { TYPES } from './types';

export const container = new Container();
container.bind<IApiManager<ReadTodoDto>>(TYPES.ApiManager).to(ApiManager);
container.bind<ITodoClient>(TYPES.TodoClient).to(TodoClient);
