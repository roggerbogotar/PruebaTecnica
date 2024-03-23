import { Router } from "express";
import {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
  getUsersByRole,
} from "../controllers/users.controller.js";

const router = Router();
router.post("/", createUser);
router.get("/", getUsers);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/:id/role", getUsersByRole);

export default router;
