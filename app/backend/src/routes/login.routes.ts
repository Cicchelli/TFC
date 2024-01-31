import { Router, Request, Response } from 'express';
import AuthMiddleware from '../middlewares/autenticator';
import Validations from '../middlewares/validate';
import UserController from '../controllers/user.controller';

const userController = new UserController();
const loginRouter = Router();

loginRouter.post('/', Validations.validateLoginFields, (req: Request, res: Response) => {
  userController.login(req, res);
});
loginRouter.get(
  '/role',
  AuthMiddleware.handle,
  (req: Request, res: Response) => UserController.rToken(req, res),
);

export default loginRouter;
