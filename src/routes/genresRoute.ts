import express, { Request, Response, Router } from 'express';

import {
  getGenres,
  createGenre,
  deleteGenre,
  updateGenre
} from '../controllers/genresController';

const router: Router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Genres
 *   description: API endpoints for managing genres
 */

/**
 * @swagger
 * /api/genres:
 *   get:
 *     summary: Get a list of all genres.
 *     tags: [Genres]
 *     responses:
 *       200:
 *         description: A list of genres.
 *         content:
 *           application/json:
 *             example:
 *               - name: "Genre 1"
 *               - name: "Genre 2"
 *       500:
 *         description: Internal Server Error.
 */
router.get('/genres', getGenres);

/**
 * @swagger
 * /api/genres:
 *   put:
 *     summary: Create a new genre.
 *     tags: [Genres]
 *     requestBody:
 *       description: Genre info to create.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the new genre.
 *     responses:
 *       201:
 *         description: Genre created successfully.
 *         content:
 *           application/json:
 *             example:
 *               _id: "generated_id"
 *               name: "New Genre"
 *       400:
 *         description: Bad Request. Check the request payload and try again.
 *         content:
 *           application/json:
 *             example:
 *               error: "Genre name is required. / Genre with the same name already exists."
 *       500:
 *         description: Internal Server Error.
 */
router.put('/genres', createGenre);

/**
 * @swagger
 * /api/genres/{name}:
 *   delete:
 *     summary: Delete a genre by name.
 *     tags: [Genres]
 *     parameters:
 *       - in: path
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *         description: The name of the genre to delete.
 *     responses:
 *       200:
 *         description: Genre deleted successfully.
 *         content:
 *           application/json:
 *             example:
 *               status: "Genre deleted successfully"
 *       404:
 *         description: Genre not found.
 *         content:
 *           application/json:
 *             example:
 *               error: "Genre not found."
 *       500:
 *         description: Internal Server Error.
 *         content:
 *           application/json:
 *             example:
 *               error: "An error occurred while deleting the genre."
 */
router.delete('/genres/:name', deleteGenre);

/**
 * @swagger
 * /api/genres/{name}:
 *   post:
 *     summary: Update a genre by name
 *     tags: [Genres]
 *     parameters: 
 *       - in: path
 *         name: name
 *         schema: 
 *           type: string
 *         required: true
 *         description: The name of the genre to update.
 *     responses:
 *       200:
 *         description: Genre updated successfully.
 *       400:
 *         description: Bad Request. Both current name and new name are required.
 *       404:
 *         description: Genre not found.
 *       500:
 *         description: Internal Server Error.      
 */
router.post('/genres/:name', updateGenre);

export default router;