import { Router, Request, Response } from 'express';
import LeaderboardController from '../controllers/leaderboard';

const leaderRoutes = Router();
const leaderboardController = new LeaderboardController();

leaderRoutes.get(
  '/home',
  (req: Request, res: Response) => leaderboardController.getAllHome(req, res),
);

export default leaderRoutes;