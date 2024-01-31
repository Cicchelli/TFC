import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { ServiceResponse } from '../Interfaces/serviceResponse';
import IUserModel from '../model/userModel';

type LoginResp = { token: string };

export default class UsersService {
  private userModel: IUserModel;

  constructor(userModel: IUserModel = new IUserModel()) {
    this.userModel = userModel;
  }

  public async login(email: string, password: string): Promise<ServiceResponse<LoginResp>> {
    const user = await this.userModel.findByUserEmail(email);

    if (!user) {
      return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
    }

    const payload = { sub: Number(user.id), role: user.role, email: user.email };
    const secret = process.env.JWT_SECRET || '';
    const token = jwt.sign(payload, secret, { expiresIn: '7d' });

    return { status: 'SUCCESSFUL', data: { token } };
  }
}
