"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get a list of users.
 *     responses:
 *       200:
 *         description: Successfully retrieved the list of users.
 *       500:
 *         description: Internal Server Error.
 *       404:
 *         description: Not Found.
 */
router.get("/users", function (req, res) {
    res.json({ status: "Successfully retrieved the list of users" });
});
exports.default = router;
