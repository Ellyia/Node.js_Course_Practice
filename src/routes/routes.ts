import express, { Router } from 'express';

const router: Router = express.Router();

import userRoute from './userRoute';
import healthCheckRoute from './healthCheckRoute';
import moviesRoute from './moviesRoute';

router.use(userRoute);
router.use(healthCheckRoute);
router.use(moviesRoute);

export default router;
