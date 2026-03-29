import express from "express";
import { getProcessorMetrics } from "../controllers/processor.controller.js";

const router = express.Router();

/**
 * @swagger
 * /api/metrics:
 *   get:
 *     summary: Monitor processor usage
 *     tags: [Processors]
 */
router.get("/metrics", getProcessorMetrics);

export default router;