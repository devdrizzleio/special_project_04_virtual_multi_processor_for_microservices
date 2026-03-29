import { Service } from "../models/service.model.js";
import { assignProcessor } from "../utils/loadBalancer.js";
import { sendResponse } from "../utils/apiResponse.js";
import { v4 as uuidv4 } from "uuid";

const registerService = async (req, res) => {
  try {
    const { serviceName } = req.body;
    if (!serviceName) return sendResponse(res, { statusCode: 400, success: false, message: "Service name required" });

    const processorAssigned = await assignProcessor();
    const service = await Service.create({
      serviceId: uuidv4(),
      serviceName,
      processorAssigned
    });

    return sendResponse(res, { statusCode: 201, message: "Service registered successfully", data: service });
  } catch (error) {
    return sendResponse(res, { statusCode: 500, success: false, message: error.message });
  }
};

export { registerService };