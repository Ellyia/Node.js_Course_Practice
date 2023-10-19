import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerDefinition = {
  info: {
    title: "API Documentation",
    version: "1.0.0",
    description: "API documentation for Ella`s Node.js application",
  },
  basePath: "/api",
};

const options = {
  swaggerDefinition,
  apis: ["./src/routes/*.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

export { swaggerUi, swaggerSpec };
