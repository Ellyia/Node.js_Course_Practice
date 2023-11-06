import express, { Router, Request, Response } from 'express';
import Movie from '../models/movieModel';

const router: Router = express.Router();

/**
 * @swagger
 * /api/movies/genre/{genreName}:
 *   get:
 *     summary: Get movies by genre.
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: genreName
 *         required: true
 *         description: The name of the genre to search for.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of movies with the specified genre.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Movie'
 *       500:
 *         description: Internal Server Error.
 */
router.get('/movies/genre/:genreName', async (req: Request, res: Response) => {
  const { genreName } = req.params;
  try {
    const movies = await Movie.find({ genre: genreName });
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while searching for movies.' });
  }
});

export default router;