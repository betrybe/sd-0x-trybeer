import { Router } from 'express';
const routes = new Router();

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

routes.post('/register', UserController.store);
routes.post('/login', SessionController.store);

routes.get('/', (req, res) => {
  return res.json({ ok: true });
});

export default routes;
