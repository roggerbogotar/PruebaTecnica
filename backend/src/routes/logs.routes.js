import { Router } from "express";
import {
  createLog,
  getLogs,
  getLogsByUser,
} from "../controllers/logs.controller.js";

const router = Router();
router.post("/", createLog);
router.get("/", getLogs);
router.get("/:id/user", getLogsByUser);

export default router;
