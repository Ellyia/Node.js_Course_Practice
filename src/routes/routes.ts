import express, { Router } from 'express';

const router: Router = express.Router();

import healthCheckRoute from './healthCheckRoute';
import moviesRoute from './moviesRoute';
import moviesByGenreRoute from './moviesByGenreRoute';
import genresRoute from './genresRoute';

router.use(healthCheckRoute);
router.use(moviesRoute);
router.use(moviesByGenreRoute);
router.use(genresRoute);

export default router;
