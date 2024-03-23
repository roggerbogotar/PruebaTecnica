import { Router } from "express";
import {
  getRoles,
  createRole,
  updateRole,
  deleteRole,
  getRole,
} from "../controllers/roles.controller.js";

const router = Router();
router.post("/", createRole);
router.get("/", getRoles);
router.put("/:id", updateRole);
router.delete("/:id", deleteRole);
router.get("/:id", getRole);

export default router;
