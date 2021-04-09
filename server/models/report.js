import mongoose from "mongoose";

const reportSchema = mongoose.Schema({
  title: String,
  message: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Report = mongoose.model("Report", reportSchema);

export default Report;
