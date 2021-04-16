import mongoose from "mongoose";

const reportSchema = mongoose.Schema({
  title: String,
  message: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
  branchName: String,
  coverage: {
    statement: Number,
    method: Number,
  },
  prUrl: String,
});

const Report = mongoose.model("Report", reportSchema);

export default Report;
