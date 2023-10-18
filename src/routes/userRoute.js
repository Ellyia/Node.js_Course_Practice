const express = require('express');
const router = express.Router();

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
 */
router.get('/users', (req, res) => {
  res.json({ status: 'User`s Server is running' });
});

module.exports = router;