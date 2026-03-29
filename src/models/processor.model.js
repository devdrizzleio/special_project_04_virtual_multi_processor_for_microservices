import mongoose from "mongoose";

const processorSchema = new mongoose.Schema(
  {
    processorId: { type: String, required: true, unique: true },
    status: { type: String, enum: ["IDLE", "ACTIVE", "BUSY"], default: "IDLE" },
    CPU: { type: Number, default: 0 },
    Memory: { type: Number, default: 0 },
    currentLoad: { type: Number, default: 0 }
  },
  { timestamps: true }
);

const Processor = mongoose.model("Processor", processorSchema);
export { Processor };