const express = require('express');
const router = express.Router();

const { body } = require('express-validator');
const validate = require('../middlewares/validationMiddleware');

const userController = require('../controllers/userController');

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get a list of users.
 *     responses:
 *       200:
 *         description: Successfully retrieved the list of users.
 */
router.get('/users', userController.getUsers);

// POST /api/create-user
router.post(
  '/create-user',
  [
    body('name').trim().isLength({ min: 3 }).withMessage('Name must be at least 3 characters long'),
    body('email').isEmail().withMessage('Invalid email format'),
  ],
  validate,
  userController.createUser
);

module.exports = router;