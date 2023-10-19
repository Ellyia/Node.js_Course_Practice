"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var swagger_1 = require("./swagger");
var notFoundMiddleware_1 = __importDefault(require("./middlewares/notFoundMiddleware"));
var errorHandlingMiddleware_1 = __importDefault(require("./middlewares/errorHandlingMiddleware"));
var routes_1 = __importDefault(require("./routes/routes"));
var app = (0, express_1.default)();
var PORT = 3000;
app.use("/api", routes_1.default);
app.use("/api-docs", swagger_1.swaggerUi.serve, swagger_1.swaggerUi.setup(swagger_1.swaggerSpec));
app.use(notFoundMiddleware_1.default);
app.use(errorHandlingMiddleware_1.default);
app.listen(PORT, function () {
    console.log("Server listening on port ".concat(PORT));
});
