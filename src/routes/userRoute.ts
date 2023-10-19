import express, { Request, Response, Router } from "express";

const router: Router = express.Router();

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get a list of users.
 *     responses:
 *       200:
 *         description: Successfully retrieved the list of users.
 *       500:
 *         description: Internal Server Error.
 *       404:
 *         description: Not Found.
 */
router.get("/users", (req: Request, res: Response) => {
  res.json({ status: "Successfully retrieved the list of users" });
});

export default router;
