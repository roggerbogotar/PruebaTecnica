import { Router } from "express";
import {
  createSale,
  getSales,
  updateSale,
  getSalesByUser,
  getSalesByProduct,
} from "../controllers/sales.controller.js";

const router = Router();
router.post("/", createSale);
router.get("/", getSales);
router.put("/:id", updateSale);
router.get("/:id/user", getSalesByUser);
router.get("/:id/product", getSalesByProduct);

export default router;
