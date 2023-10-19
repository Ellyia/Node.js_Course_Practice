import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

/**
 * @swagger
 * /api/health-check:
 *   get:
 *     summary: Check if the server is running.
 *     responses:
 *       200:
 *         description: Server is up and running.
 *       500:
 *         description: Internal Server Error.
 *       404:
 *         description: Not Found.
 */
router.get('/health-check', (req: Request, res: Response) => {
  res.json({ status: 'Ella`s Server is running' });
});

export default router;
