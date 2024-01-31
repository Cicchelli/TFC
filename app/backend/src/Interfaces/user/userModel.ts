import { CRUDModelReader } from '../CRUD';
import { User } from './user';

export interface IUserModel extends CRUDModelReader<User> {
  findByUserEmail(email: string): Promise<User | null>;
}
