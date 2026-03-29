import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
    serviceId: { type: String, required: true, unique: true },
    serviceName: { type: String, required: true },
    registeredAt: { type: Date, default: Date.now },
    processorAssigned: { type: String, default: null }
  },
  { timestamps: true }
);

const Service = mongoose.model("Service", serviceSchema);
export { Service };