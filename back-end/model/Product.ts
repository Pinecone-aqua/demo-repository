import mongoose from "mongoose";

interface ProductInterface {
  price: number;
  name: string;
  quantity: number;
  category: string;
  brand: string;
}

const ProductSchema = new mongoose.Schema<ProductInterface>(
  {
    price: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
  },
  {
    collection: "movies",
  }
);

const Product = mongoose.model("Product", ProductSchema, "products");

export default Product;
