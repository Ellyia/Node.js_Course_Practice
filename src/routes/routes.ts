import express, { Router } from 'express';

const router: Router = express.Router();

import userRoute from './userRoute';
import healthCheckRoute from './healthCheckRoute';
import moviesRoute from './moviesRoute';
import moviesByGenreRoute from './moviesByGenreRoute';
import genresRoute from './genresRoute';

router.use(userRoute);
router.use(healthCheckRoute);
router.use(moviesRoute);
router.use(moviesByGenreRoute);
router.use(genresRoute);

export default router;
