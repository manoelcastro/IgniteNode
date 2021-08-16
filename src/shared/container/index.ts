import { container } from 'tsyringe';

import { ICategoriesRepository } from '../../modules/car/repositories/ICategoriesRepository';
import { CategoriesRepository } from '../../modules/car/repositories/implementations/CategoriesRepository';
import { SpecificationsRepository } from '../../modules/car/repositories/implementations/SpecificationsRepository';
import { ISpecificationsRepository } from '../../modules/car/repositories/ISpecificationsRepository';
import { UsersRepository } from '../../modules/users/repositories/implementations/UsersRepository';
import { IUsersRepository } from '../../modules/users/repositories/IUsersRepository';

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);

container.registerSingleton<ISpecificationsRepository>(
  'SpecificationsRepository',
  SpecificationsRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
