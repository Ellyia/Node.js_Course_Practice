import express, { Router } from "express";

const router: Router = express.Router();

import userRoute from "./userRoute";
import healthCheckRoute from "./healthCheckRoute";

router.use(userRoute);
router.use(healthCheckRoute);

export default router;
