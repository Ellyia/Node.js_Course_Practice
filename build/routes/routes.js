"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var userRoute_1 = __importDefault(require("./userRoute"));
var healthCheckRoute_1 = __importDefault(require("./healthCheckRoute"));
router.use(userRoute_1.default);
router.use(healthCheckRoute_1.default);
exports.default = router;
