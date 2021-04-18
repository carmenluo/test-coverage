import express from "express";
import mongoose from "mongoose";

import Report from "../models/report.js";

const router = express.Router();

export const addReport = async (req, res) => {
  const { report, title, message, prUrl, branchName } = req.body;
  console.log(title, message, prUrl, branchName);
  const newReport = new Report({
    title,
    message,
    prUrl,
    branchName,
  });
  console.log(newReport);
  try {
    await newReport.save();

    res.status(201).json(newReport);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getReport = async (req, res) => {
  try {
    const reports = await Report.find();

    res.status(200).json(reports);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export default router;
