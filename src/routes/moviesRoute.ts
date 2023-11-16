import express, { Router } from 'express';
import validateMovie from '../middlewares/requestValidationMiddleware';
import {
  getMovies,
  createMovie,
  getMovieByName,
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
 *   put:
 *     summary: Create a new movie.
 *     tags: [Movies]
 *     requestBody:
 *       description: New info of the movie.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: New name of the movie.
 *               description:
 *                 type: string
 *                 description: New description of the movie.
 *               releaseDate:
 *                 type: string
 *                 description: New releaseDate of the movie.
 *               genre:
 *                 type: string
 *                 description: New genre of the movie.
 *     responses:
 *       201:
 *         description: Movie created successfully.
 *       400:
 *         description: Error creating the movie. / Movie with the same title already exists.
 */
 router.put('/movies', validateMovie, createMovie);

/**
 * @swagger
 * /api/movies/getOne:
 *   get:
 *     summary: Get a movie by Title.
 *     tags: [Movies]
 *     parameters:
 *       - in: query
 *         name: title
 *         schema:
 *           type: string
 *         required: true
 *         description: The title of the movie.
 *     responses:
 *       200:
 *         description: Movie details.
 *       404:
 *         description: Movie not found.
 *       500:
 *         description: Internal Server Error.
 */
router.get('/movies/getOne', getMovieByName); // http://localhost:3000/api/movies/getOne?title=titleName

/**
 * @swagger
 * /api/movies/{title}:
 *   post:
 *     summary: Update a movie by Title.
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: title
 *         schema:
 *           type: string
 *         required: true
 *         description: The title of the movie.
 *     requestBody:
 *       description: New info of the movie.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: New name of the movie.
 *               description:
 *                 type: string
 *                 description: New description of the movie.
 *               releaseDate:
 *                 type: string
 *                 description: New releaseDate of the movie.
 *               genre:
 *                 type: string
 *                 description: New genre of the movie.
 *     responses:
 *       200:
 *         description: Updated movie.
 *       404:
 *         description: Movie not found.
 *       500:
 *         description: Internal Server Error.
 */
router.post('/movies/:title', validateMovie, updateMovie); // http://localhost:3000/api/movies/titleName

/**
 * @swagger
 * /api/movies/{title}:
 *   delete:
 *     summary: Delete a movie by title.
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: title
 *         schema:
 *           type: string
 *         required: true
 *         description: The title of the movie.
 *     responses:
 *       200:
 *         description: Movie deleted successfully.
 *       404:
 *         description: Movie not found.
 *       500:
 *         description: Internal Server Error.
 */
router.delete('/movies/:title', deleteMovie);

export default router;