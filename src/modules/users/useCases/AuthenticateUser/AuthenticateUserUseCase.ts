import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IAuthenticateUserDTO {
  email: string;
  password: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}
  async execute({ email, password }: IAuthenticateUserDTO): Promise<string> {
    const userExists = await this.usersRepository.findByEmail(email);

    if (!userExists) {
      throw Error('This email or password not exists!');
    }

    const passwordIsOk = await bcrypt.compare(password, userExists.password);

    if (!passwordIsOk) {
      throw Error('This email or password not exists!');
    }

    const { id } = userExists;

    const token = jwt.sign({ id }, 'dfafaeasfdagaq', { expiresIn: 300 });

    return token;
  }
}

export { AuthenticateUserUseCase };
