import mongoose from "mongoose";

const testReportSchema = mongoose.Schema({
  message: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const TestReport = mongoose.model("TestReport", testReportSchema);

export default TestReport;
