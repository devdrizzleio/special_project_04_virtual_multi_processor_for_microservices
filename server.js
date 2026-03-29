import express from "express";
import cors from "cors";
import morgan from "morgan";
import http from "http";

import { loadEnvVariables } from "./src/config/env.config.js";
import { connectDatabase } from "./src/config/db.config.js";
import { initializeProcessors, refreshProcessorLoad } from "./src/processors/virtualProcessor.js";

import serviceRoutes from "./src/routes/service.routes.js";
import requestRoutes from "./src/routes/request.routes.js";
import processorRoutes from "./src/routes/processor.routes.js";

import { swaggerDocs } from "./docs/swagger.js";

loadEnvVariables();

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Health check
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: `${process.env.APP_NAME} API is healthy & lively`
  });
});

// API routes
app.use("/api", serviceRoutes);
app.use("/api", requestRoutes);
app.use("/api", processorRoutes);

// Swagger Docs
swaggerDocs(app);

// Error handler
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error"
  });
});

// HTTP server
const PORT = process.env.PORT || 7000;
const server = http.createServer(app);

const startServer = async () => {
  try {
    await connectDatabase();
    await initializeProcessors();
    refreshProcessorLoad();

    server.listen(PORT, () => {
      console.log(`${process.env.APP_NAME} running on port ${PORT}`);
      console.log(`Swagger UI available at /api-docs`);
    });
  } catch (error) {
    console.error("Startup error:", error.message);
    process.exit(1);
  }
};

startServer();