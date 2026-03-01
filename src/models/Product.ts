import mongoose, { Document, Schema } from "mongoose";

// 1️⃣ TypeScript Interface
export interface IProduct extends Document {
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  stock: number;
}

// 2️⃣ Mongoose Schema
const ProductSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    discount: {
  type: Number,
  default: 0, // percentage
  },
  brand: {
  type: String,
  required: true
},
  },
  {
    timestamps: true,
  }
);

// 3️⃣ Export Model
export default mongoose.model<IProduct>("Product", ProductSchema);