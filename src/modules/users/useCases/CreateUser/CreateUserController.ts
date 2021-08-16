import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createUserUseCase = container.resolve(CreateUserUseCase);
    const { name, email, password, driver_license } = request.body;
    try {
      await createUserUseCase.execute({
        name,
        email,
        password,
        driver_license,
      });
    } catch (erro) {
      return response.status(400).json(erro.message);
    }
    return response.status(201).json();
  }
}

export { CreateUserController };
