import express from "express";

import { addReport, getReport } from "../controllers/reports.js";

const router = express.Router();

router.post("/", addReport);
router.get("/", getReport);

export default router;
