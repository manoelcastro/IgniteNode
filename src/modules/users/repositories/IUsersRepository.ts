import { User } from '../entities/User';

interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
  driver_license: string;
}

interface IUsersRepository {
  create(createUserDTO: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User | void>;
  all(): Promise<User[]>;
}

export { IUsersRepository, ICreateUserDTO };
