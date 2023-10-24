import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

/**
 * @swagger
 * /api/movies:
 *   get:
 *     summary: Get a list of all movies.
 *     responses:
 *       200:
 *         description: A list of movies.
 *   post:
 *     summary: Create a new movie.
 *     responses:
 *       201:
 *         description: Movie created successfully.
 */
 router.get('/movies', (req: Request, res: Response) => {
  res.json({ status: 'Hello, list of movies!' });
});

router.post('/movies', (req: Request, res: Response) => {
  res.json({ status: 'Created, movie!' });
});

export default router;