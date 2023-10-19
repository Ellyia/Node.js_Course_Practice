"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerSpec = exports.swaggerUi = void 0;
var swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
exports.swaggerUi = swagger_ui_express_1.default;
var swaggerDefinition = {
    info: {
        title: "API Documentation",
        version: "1.0.0",
        description: "API documentation for Ella`s Node.js application",
    },
    basePath: "/api",
};
var options = {
    swaggerDefinition: swaggerDefinition,
    apis: ["./src/routes/*.ts"],
};
var swaggerSpec = (0, swagger_jsdoc_1.default)(options);
exports.swaggerSpec = swaggerSpec;
