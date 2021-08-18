import bcrypt from 'bcryptjs';
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
      throw new Error('This user already exists!');
    }

    const passwordHash = await bcrypt.hash(password, 8);

    await this.usersRepository.create({
      name,
      password: passwordHash,
      driver_license,
      email,
      avatar: 'fdsi',
    });
  }
}

export { CreateUserUseCase };
