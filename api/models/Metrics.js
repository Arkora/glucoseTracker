import mongoose from "mongoose";

const metricsSchema = mongoose.Schema({
  glucose: { type: Number, required:  true },
  created:  { type: Date, default: Date.now},
});

export default mongoose.model("Metrics", metricsSchema);