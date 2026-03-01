import express from "express";
import { protect, admin } from "../middleware/authMiddleware";

import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controller/productController";

const router = express.Router();

router.post("/", protect, admin, createProduct);
router.get("/", getProducts);
router.get("/:id", getProductById);
router.put("/:id", protect, admin, updateProduct);
router.delete("/:id", protect, admin, deleteProduct);

export default router;