import { Request, Response } from "express";
import Order from "../models/Order";

export const getMyOrders = async (req: any, res: Response) => {
  const orders = await Order.find({ user: req.user._id });
  res.json(orders);
};

export const createOrder = async (req: any, res: Response) => {
  try {
    const { orderItems, totalPrice } = req.body;

    if (!orderItems || orderItems.length === 0) {
      return res.status(400).json({ message: "No order items" });
    }

    const order = await Order.create({
      user: req.user._id,
      orderItems,
      totalPrice,
    });

    res.status(201).json(order);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};