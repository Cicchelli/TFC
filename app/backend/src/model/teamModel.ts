import { ITeam } from '../Interfaces/teams/Team';
import SequelizeTeam from '../database/models/teamsModel';
import { ITeamModel } from '../Interfaces/teams/TeamModel';

export default class TeamModel implements ITeamModel {
  private model = SequelizeTeam;
  async findAll(): Promise<ITeam[]> {
    const dbData = await this.model.findAll();
    return dbData;
  }

  async findById(id: number): Promise<ITeam | null> {
    const dbData = await this.model.findByPk(id);
    if (!dbData) return null;
    return dbData;
  }
}
