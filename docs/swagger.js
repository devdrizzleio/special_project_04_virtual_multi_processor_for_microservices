import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: process.env.SWAGGER_TITLE,
      version: process.env.SWAGGER_VERSION,
      description: process.env.SWAGGER_DESCRIPTION
    },
    servers: [
      { url: process.env.BASE_URL }
    ]
  },
  apis: ["./src/routes/*.js"]
};

const swaggerDocs = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(swaggerOptions)));
};

export { swaggerDocs };