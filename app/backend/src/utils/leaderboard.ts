import { IMatch } from '../Interfaces/matches/IMatch';

const totalGamesHome = (teamId: number, matches: IMatch[]): number =>
  matches.filter((match) => teamId === match.awayTeamId || teamId === match.homeTeamId).length;

const totalVictoriesHome = (teamId: number, matches: IMatch[]): number =>
  matches.filter((match) => match
    .homeTeamId === teamId && match.homeTeamGoals > match.awayTeamGoals).length;

const totalVictoriesAway = (teamId: number, matches: IMatch[]): number =>
  matches.filter((match) => match.awayTeamId === teamId && match
    .awayTeamGoals > match.homeTeamGoals).length;

const totalLosesHome = (teamId: number, matches: IMatch[]): number =>
  matches.filter((match) => match.homeTeamId === teamId && match
    .homeTeamGoals < match.awayTeamGoals).length;

const totalLosesAway = (teamId: number, matches: IMatch[]): number =>
  matches.filter((match) => match.awayTeamId === teamId && match
    .awayTeamGoals < match.homeTeamGoals).length;

const totalDrawsHome = (teamId: number, matches: IMatch[]): number =>
  matches.filter((match) => match.homeTeamId === teamId && match
    .awayTeamGoals === match.homeTeamGoals).length;

const totalDrawsAway = (teamId: number, matches: IMatch[]): number =>
  matches.filter((match) => match.awayTeamId === teamId && match
    .awayTeamGoals === match.homeTeamGoals).length;

const totalPointsHome = (teamId: number, matches: IMatch[]): number => {
  const drawsHome = totalDrawsHome(teamId, matches);
  const drawsAway = totalDrawsAway(teamId, matches);
  const totalVictories = (totalVictoriesHome(teamId, matches)
   + totalVictoriesAway(teamId, matches)) * 3;
  return drawsHome + drawsAway + totalVictories;
};

const goalsFavorHome = (teamId: number, matches: IMatch[]): number =>
  matches.reduce((acc, curr) => acc + (curr.homeTeamId === teamId ? curr.homeTeamGoals : 0), 0);

const goalsFavorAway = (teamId: number, matches: IMatch[]): number =>
  matches.reduce((acc, curr) => acc + (curr.awayTeamId === teamId ? curr.awayTeamGoals : 0), 0);

const goalsOwnHome = (teamId: number, matches: IMatch[]): number =>
  matches.reduce((acc, curr) => acc + (curr.homeTeamId === teamId ? curr.awayTeamGoals : 0), 0);

const goalsOwnAway = (teamId: number, matches: IMatch[]): number =>
  matches.reduce((acc, curr) => acc + (curr.awayTeamId === teamId ? curr.homeTeamGoals : 0), 0);

export {
  totalGamesHome,
  totalVictoriesHome,
  totalVictoriesAway,
  totalLosesHome,
  totalLosesAway,
  totalDrawsHome,
  totalDrawsAway,
  totalPointsHome,
  goalsFavorHome,
  goalsOwnHome,
  goalsOwnAway,
  goalsFavorAway,
};
