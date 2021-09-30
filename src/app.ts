import express from 'express';

import router from './Todo/todo.routes';

const app: express.Application = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/todos', router);

export default app;
