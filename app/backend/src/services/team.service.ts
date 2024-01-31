import { ServiceResponse } from '../Interfaces/serviceResponse';
import { ITeamModel } from '../Interfaces/teams/TeamModel';
import TeamModel from '../model/teamModel';
import { ITeam } from '../Interfaces/teams/Team';

export default class TeamService {
  constructor(
    private teamModel: ITeamModel = new TeamModel(),
  ) {}

  public async getAll(): Promise<ServiceResponse<ITeam[]>> {
    const allTeams = await this.teamModel.findAll();
    return { status: 'SUCCESSFUL', data: allTeams };
  }

  public async getById(id: number): Promise<ServiceResponse<ITeam>> {
    const team = await this.teamModel.findById(id);
    if (!team) return { status: 'NOT_FOUND', data: { message: 'Team not found' } };
    return { status: 'SUCCESSFUL', data: team };
  }
}
