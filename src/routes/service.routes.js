import express from "express";
import { registerService } from "../controllers/service.controller.js";

const router = express.Router();

/**
 * @swagger
 * /api/register-service:
 *   post:
 *     summary: Register a new microservice
 *     tags: [Services]
 */
router.post("/register-service", registerService);

export default router;