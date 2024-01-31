import { CRUDModelReader } from '../CRUD';
import { ITeam } from './Team';

export interface ITeamModel extends CRUDModelReader<ITeam> {
  findById(id: number): Promise<ITeam | null>,
}
