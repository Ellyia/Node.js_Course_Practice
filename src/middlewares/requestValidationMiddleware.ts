import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';

const validateMovie = [
  body('title').isString().notEmpty(),
  body('description').isString().notEmpty(),
  body('releaseDate').isISO8601().toDate(),
  body('genre').isArray().notEmpty(),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export const validateGenre = [
  body('name').isString().notEmpty(),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export default validateMovie;