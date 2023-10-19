"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorHandler = function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).json({
        error: "Internal Server Error",
    });
};
exports.default = errorHandler;
