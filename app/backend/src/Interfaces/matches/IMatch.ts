import { Identifiable } from '../Index';

export interface IMatch extends Identifiable {
  homeTeamId: number,
  homeTeamGoals: number,
  awayTeamId: number,
  awayTeamGoals:number,
  inProgress: boolean;
}
