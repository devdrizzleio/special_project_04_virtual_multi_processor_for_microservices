import { Service } from "../models/service.model.js";
import { Processor } from "../models/processor.model.js";
import { sendResponse } from "../utils/apiResponse.js";

/**
 * Route a request to the assigned processor
 * Simulate CPU/Memory load increment
 */
const routeRequest = async (req, res) => {
  try {
    const { serviceId } = req.body;
    const service = await Service.findOne({ serviceId });
    if (!service) return sendResponse(res, { statusCode: 404, success: false, message: "Service not found" });

    const processor = await Processor.findOne({ processorId: service.processorAssigned });
    if (!processor) return sendResponse(res, { statusCode: 404, success: false, message: "Assigned processor not found" });

    // Simulate load increase
    processor.currentLoad += 1;
    processor.CPU = Math.min(100, processor.CPU + Math.random() * 10);
    processor.Memory = Math.min(100, processor.Memory + Math.random() * 5);
    processor.status = "BUSY";
    await processor.save();

    return sendResponse(res, { message: `Request routed to processor ${processor.processorId}`, data: processor });
  } catch (error) {
    return sendResponse(res, { statusCode: 500, success: false, message: error.message });
  }
};

export { routeRequest };