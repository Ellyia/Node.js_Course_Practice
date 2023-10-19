"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var notFoundMiddleware = function (req, res, next) {
    res.status(404).json({ error: "Not Found" });
};
exports.default = notFoundMiddleware;
