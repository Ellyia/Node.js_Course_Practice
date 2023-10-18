const express = require('express');
const router = express.Router();

const userRoute = require('./userRoute');
const healthCheckRoute = require('./healthCheckRoute');

router.use(userRoute);
router.use(healthCheckRoute);

module.exports = router;