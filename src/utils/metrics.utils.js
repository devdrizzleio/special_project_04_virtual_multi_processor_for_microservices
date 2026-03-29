const aggregateProcessorMetrics = (processors) => {
  if (!processors || processors.length === 0) return {};

  const totalCPU = processors.reduce((sum, p) => sum + p.CPU, 0);
  const totalMemory = processors.reduce((sum, p) => sum + p.Memory, 0);
  const totalLoad = processors.reduce((sum, p) => sum + p.currentLoad, 0);

  const count = processors.length;

  return {
    avgCPU: totalCPU / count,
    avgMemory: totalMemory / count,
    avgLoad: totalLoad / count
  };
};

export { aggregateProcessorMetrics };