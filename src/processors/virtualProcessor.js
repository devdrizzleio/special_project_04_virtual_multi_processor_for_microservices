import { Processor } from "../models/processor.model.js";
import { MAX_PROCESSORS, PROCESSOR_REFRESH_INTERVAL } from "../config/cluster.config.js";
import { v4 as uuidv4 } from "uuid";

/**
 * Initialize virtual processors on server startup
 */
const initializeProcessors = async () => {
  const existing = await Processor.find();
  if (existing.length >= MAX_PROCESSORS) return;

  for (let i = 0; i < MAX_PROCESSORS; i++) {
    const processorId = uuidv4();
    await Processor.create({
      processorId,
      status: "IDLE",
      CPU: 0,
      Memory: 0,
      currentLoad: 0
    });
  }

  console.log(`Initialized ${MAX_PROCESSORS} virtual processors`);
};

/**
 * Simulate processor load decrement over time
 */
const refreshProcessorLoad = async () => {
  setInterval(async () => {
    const processors = await Processor.find();
    for (let processor of processors) {
      processor.CPU = Math.max(0, processor.CPU - Math.random() * 5);
      processor.Memory = Math.max(0, processor.Memory - Math.random() * 2);
      processor.currentLoad = Math.max(0, processor.currentLoad - 1);
      processor.status = processor.currentLoad > 0 ? "BUSY" : "IDLE";
      await processor.save();
    }
  }, PROCESSOR_REFRESH_INTERVAL);
};

export { initializeProcessors, refreshProcessorLoad };