import express from "express";

import {
  addReport,
  getReport,
  getPrReports,
  getBaseReport,
} from "../controllers/reports.js";

const router = express.Router();

router.post("/", addReport);
router.get("/", getReport);
router.get("/prs", getPrReports);
router.get("/base", getBaseReport);

export default router;
