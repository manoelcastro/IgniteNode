import { inject, injectable } from 'tsyringe';

import {
  ICreateUserDTO,
  IUsersRepository,
} from '../../repositories/IUsersRepository';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({
    name,
    email,
    driver_license,
    password,
  }: ICreateUserDTO): Promise<void> {
    const userExists = this.usersRepository.findByEmail(email);

    if (!userExists) {
      throw Error('This user already exists!');
    }

    await this.usersRepository.create({
      name,
      password,
      driver_license,
      email,
    });
  }
}

export { CreateUserUseCase };
