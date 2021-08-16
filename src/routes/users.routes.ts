import { Router } from 'express';

import { CreateUserController } from '../modules/users/useCases/CreateUser/CreateUserController';
import { ListUsersController } from '../modules/users/useCases/ListUsers/ListUsersController';

const listUsersController = new ListUsersController();
const createUsersController = new CreateUserController();

const usersRoutes = Router();

usersRoutes.get('/', listUsersController.handle);
usersRoutes.post('/', createUsersController.handle);

export { usersRoutes };
