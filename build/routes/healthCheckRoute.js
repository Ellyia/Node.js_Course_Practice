"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
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
 *       404:
 *         description: Not Found.
 */
router.get("/health-check", function (req, res) {
    res.json({ status: "Ella`s Server is running" });
});
exports.default = router;
