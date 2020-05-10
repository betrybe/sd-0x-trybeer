import { Router } from 'express';
const routes = new Router();

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ProductController from './app/controllers/ProductController';
import OrderController from './app/controllers/OrderController';

import AdminOrderController from './app/controllers/admin/OrderController';

import authMiddleware from './app/middlewares/auth';

routes.post('/register', UserController.store);
routes.post('/login', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);

routes.get('/my-orders', OrderController.index);
routes.post('/finish-order', OrderController.store);

routes.get('/orders', AdminOrderController.index);
routes.get('/orders/:id', AdminOrderController.show);

export default routes;
