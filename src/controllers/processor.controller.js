import { Processor } from "../models/processor.model.js";
import { sendResponse } from "../utils/apiResponse.js";
import { aggregateProcessorMetrics } from "../utils/metrics.utils.js";

const getProcessorMetrics = async (req, res) => {
  try {
    const processors = await Processor.find();
    const aggregated = aggregateProcessorMetrics(processors);
    return sendResponse(res, { message: "Processor metrics retrieved", data: { processors, aggregated } });
  } catch (error) {
    return sendResponse(res, { statusCode: 500, success: false, message: error.message });
  }
};

export { getProcessorMetrics };