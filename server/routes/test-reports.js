import express from "express";

import { addTestReport, getTestReports } from "../controllers/test-reports.js";

const router = express.Router();

router.post("/", addTestReport);
router.get("/", getTestReports);

export default router;
