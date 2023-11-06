import express, { Router } from 'express';

const router: Router = express.Router();

import userRoute from './userRoute';
import healthCheckRoute from './healthCheckRoute';
import moviesRoute from './moviesRoute';
import moviesByGenreRoute from './moviesByGenreRoute';

router.use(userRoute);
router.use(healthCheckRoute);
router.use(moviesRoute);
router.use(moviesByGenreRoute)

export default router;
