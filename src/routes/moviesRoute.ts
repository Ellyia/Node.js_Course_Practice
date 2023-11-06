import express, { Router } from 'express';
import validateMovie from '../middlewares/requestValidationMiddleware';
import {
  getMovies,
  createMovie,
  getMovieById,
  updateMovie,
  deleteMovie,
} from '../controllers/moviesController';

const router: Router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Movies
 *   description: API endpoints for managing movies
 */

/**
 * @swagger
 * /api/movies:
 *   get:
 *     summary: Get a list of all movies.
 *     tags: [Movies]
 *     responses:
 *       200:
 *         description: A list of movies.
 *       500:
 *         description: Internal Server Error.
 */
router.get('/movies', getMovies);

/**
 * @swagger
 * /api/movies:
 *   post:
 *     summary: Create a new movie.
 *     tags: [Movies]
 *     responses:
 *       201:
 *         description: Movie created successfully.
 *       400:
 *         description: Error creating the movie.
 */
 router.post('/movies', validateMovie, createMovie);

/**
 * @swagger
 * /api/movies/{movieId}:
 *   get:
 *     summary: Get a movie by ID.
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: movieId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the movie.
 *     responses:
 *       200:
 *         description: Movie details.
 *       404:
 *         description: Movie not found.
 *       500:
 *         description: Internal Server Error.
 *   put:
 *     summary: Update a movie by ID.
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: movieId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the movie.
 *     responses:
 *       200:
 *         description: Updated movie.
 *       404:
 *         description: Movie not found.
 *       500:
 *         description: Internal Server Error.
 *   delete:
 *     summary: Delete a movie by ID.
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: movieId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the movie.
 *     responses:
 *       200:
 *         description: Movie deleted successfully.
 *       404:
 *         description: Movie not found.
 *       500:
 *         description: Internal Server Error.
 */
router.get('/movies/:movieId', getMovieById);
router.put('/movies/:movieId', validateMovie, updateMovie);
router.delete('/movies/:movieId', deleteMovie);

export default router;