import { CRUDModelReader } from '../CRUD';
import { IMatch } from './IMatch';
import { MatchInfos } from './MInfo';

export interface IMatchModel extends CRUDModelReader<IMatch> {
  findMatchsFiltred(query: string): Promise<IMatch[]>;
  patchInprogress(id: number): Promise<void>
  patchInprogress(id: number): Promise<void>;
  updateScore(homeTeamGoals: number, awayTeamGoals: number, id: number): Promise<void>
  create(matchInfos: MatchInfos): Promise<IMatch>
}
