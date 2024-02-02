import MatchModel from '../model/MatchModel';
import TeamModel from '../model/teamModel';
import {
  goalsFavorHome,
  goalsOwnHome,
  totalDrawsHome,
  totalGamesHome,
  totalLosesHome,
  totalPointsHome,
  totalVictoriesHome,
} from '../utils/leaderboard';

export default class LeaderboardService {
  constructor(
    private matchModel = new MatchModel(),
    private teamModel = new TeamModel(),
  ) {}

  async getAllLeaderHome() {
    const teams = await this.teamModel.findAll();
    const matches = await this.matchModel.findMatchsFiltred('false');
    const homeMatches = teams.map((team: { teamName: any; id: number }) => {
      const {
        id, teamName,
      } = team;
      return {
        name: teamName,
        totalPoints: totalPointsHome(id, matches),
        totalGames: totalGamesHome(id, matches),
        totalVictories: totalVictoriesHome(id, matches),
        totalDraws: totalDrawsHome(id, matches),
        totalLosses: totalLosesHome(id, matches),
        goalsFavor: goalsFavorHome(id, matches),
        goalsOwn: goalsOwnHome(id, matches),
      };
    });
    return { status: 'SUCCESSFUL', data: homeMatches };
  }
}
