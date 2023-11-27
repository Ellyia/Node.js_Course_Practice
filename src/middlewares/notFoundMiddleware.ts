import { Request, Response } from 'express';

const notFoundMiddleware = (req: Request, res: Response) => {
  res.status(404).json({ error: 'Not Found' });
};

export default notFoundMiddleware;
