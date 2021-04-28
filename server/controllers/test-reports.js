import express from "express";

import TestReport from "../models/test-report.js";

const router = express.Router();

export const addTestReport = async (req, res) => {
  const { message } = req.body;
  const newTestReport = new TestReport({
    message,
  });
  try {
    await newReport.save();

    res.status(200).json(newTestReport);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTestReports = async (req, res) => {
  try {
    const reports = await TestReport.find();
    res.status(200).json(reports);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
