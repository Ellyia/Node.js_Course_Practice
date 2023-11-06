import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API endpoints for managing users
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get a list of users.
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Successfully retrieved the list of users.
 *       500:
 *         description: Internal Server Error.
 *       404:
 *         description: Not Found.
 */
router.get('/users', (req: Request, res: Response) => {
  res.json({ status: 'Successfully retrieved the list of users' });
});

export default router;
