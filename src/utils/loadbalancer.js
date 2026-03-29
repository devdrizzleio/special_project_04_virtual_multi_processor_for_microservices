import { Processor } from "../models/processor.model.js";

/**
 * Assign the next available processor to a service.
 * Simple round-robin or first-idle assignment.
 */
const assignProcessor = async () => {
  const idleProcessor = await Processor.findOne({ status: "IDLE" }).sort({ currentLoad: 1 });
  if (idleProcessor) return idleProcessor.processorId;

  // If all busy, pick processor with minimal load
  const processor = await Processor.find().sort({ currentLoad: 1 }).limit(1);
  return processor.length ? processor[0].processorId : null;
};

export { assignProcessor };