import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase);
    const { email, password } = request.body;
    try {
      const userToken = authenticateUserUseCase.execute({ email, password });
      return response.status(201).json({ auth: true, token: userToken });
    } catch (error) {
      return response
        .status(401)
        .json({ auth: false, token: null, message: error.message });
    }
  }
}

export { AuthenticateUserController };
