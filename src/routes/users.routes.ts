import { Router } from 'express';

import { AuthenticateUserController } from '../modules/users/useCases/AuthenticateUser/AuthenticateUserController';
import { CreateUserController } from '../modules/users/useCases/CreateUser/CreateUserController';
import { ListUsersController } from '../modules/users/useCases/ListUsers/ListUsersController';

const listUsersController = new ListUsersController();
const createUsersController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

const usersRoutes = Router();

usersRoutes.post('/login', authenticateUserController.handle);
usersRoutes.get('/', listUsersController.handle);
usersRoutes.post('/', createUsersController.handle);

export { usersRoutes };
