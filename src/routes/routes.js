const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /health-check:
 *   get:
 *     summary: Check if the server is running.
 *     responses:
 *       200:
 *         description: Server is up and running.
 */
router.get('/health-check', (req, res) => {
  res.json({ status: 'Server is running' });
});

module.exports = router;