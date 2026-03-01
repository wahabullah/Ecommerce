import express from "express";
import { createOrder, getMyOrders } from "../controller/orderController";
import { protect } from "../middleware/authMiddleware";

const router = express.Router();

/* Create new order */
router.post("/", protect, createOrder);

/* Get logged-in user's orders */
router.get("/my", protect, getMyOrders);

export default router;