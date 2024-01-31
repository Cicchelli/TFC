import { Identifiable } from '../Index';

export interface ILogin {
  email: string,
  password: string,
}

export interface User extends Identifiable, ILogin {
  username: string,
  role: string,
}
