import { IMatch } from '../Interfaces/matches/IMatch';
import SequelizeMatches from '../database/models/matchModel';
import SequelizeTeam from '../database/models/teamsModel';

export default class MatchModel {
  [x: string]: any;
  private matchsModel = SequelizeMatches;

  async findAll(): Promise<IMatch[]> {
    const teams = await this.matchsModel.findAll({
      include: [
        { model: SequelizeTeam, as: 'homeTeam', attributes: ['teamName'] },
        { model: SequelizeTeam, as: 'awayTeam', attributes: ['teamName'] },
      ],
      attributes: { exclude: ['home_team_id', 'away_team_id'] },
    });

    return teams;
  }

  async findMatchsFiltred(query: string): Promise<IMatch[]> {
    const progress = query === 'true';
    const teams = await this.matchsModel.findAll({
      where: { inProgress: progress },
      include: [
        { model: SequelizeTeam, as: 'homeTeam', attributes: ['teamName'] },
        { model: SequelizeTeam, as: 'awayTeam', attributes: ['teamName'] },
      ],
      attributes: { exclude: ['home_team_id', 'away_team_id'] },
    });
    return teams;
  }
}