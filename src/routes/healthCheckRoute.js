const express = require('express');
const router = express.Router();

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
 */
router.get('/health-check', (req, res) => {
  res.json({ status: 'Ella`s Server is running' });
});

module.exports = router;