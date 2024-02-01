import { CRUDModelReader } from '../CRUD';
import { IMatch } from './IMatch';

export interface IMatchModel extends CRUDModelReader<IMatch> {
  findMatchsFiltred(query: string): Promise<IMatch[]>;
}
