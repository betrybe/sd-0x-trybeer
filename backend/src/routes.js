import { Router } from 'express';
const routes = new Router();

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ProductController from './app/controllers/ProductController';
import OrderController from './app/controllers/OrderController';

import authMiddleware from './app/middlewares/auth';

routes.post('/register', UserController.store);
routes.post('/login', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);

routes.post('/finish-order', OrderController.store);

export default routes;
