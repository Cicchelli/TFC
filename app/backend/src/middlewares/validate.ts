import { Request, Response, NextFunction } from 'express';

export default class Validations {
  static validateLoginFields(req: Request, res: Response, next: NextFunction): Response | void {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'All fields must be filled' });
    }

    if (password.length < 6 || /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i.test(email)) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    next();
  }
}
