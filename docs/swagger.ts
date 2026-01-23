import swaggerJSDoc from "swagger-jsdoc";
import { schemas } from "./schemas";

export const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: "3.0.3",
    info: {
      title: "Email Service API",
      version: "1.0.0",
      description: "OpenAPI documentation",
    },
    servers: [{ url: "http://localhost:5000/api" }],

    components: {
    //   securitySchemes: {
    //     bearerAuth: {
    //       type: "http",
    //       scheme: "bearer",
    //       bearerFormat: "JWT",
    //     },
    //   },
      schemas,
    },

    security: [{ bearerAuth: [] }],
  },

  apis: ["./docs/**/*.docs.ts"],
});
