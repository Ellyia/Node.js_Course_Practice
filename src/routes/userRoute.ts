import express, { Request, Response, Router } from 'express';
import userModel, { IUser } from '../models/userModel';
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
router.get('/users', async (req: Request, res: Response) => {
  const users = await userModel.find({});
  try {
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/users", async (req: Request, res: Response) => {
  const user = new userModel(req.body);

  try {
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
