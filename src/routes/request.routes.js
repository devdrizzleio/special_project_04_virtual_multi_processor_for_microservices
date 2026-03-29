import express from "express";
import { routeRequest } from "../controllers/request.controller.js";

const router = express.Router();

/**
 * @swagger
 * /api/route-request:
 *   post:
 *     summary: Route request to assigned virtual processor
 *     tags: [Requests]
 */
router.post("/route-request", routeRequest);

export default router;