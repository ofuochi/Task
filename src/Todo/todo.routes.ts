import express from 'express';
import { getTodos } from './controllers/todos.controller';

const router: express.Router = express.Router();

router.get('/', getTodos);

export default router;
