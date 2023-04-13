import mongoose from "mongoose";

interface UserInterface {
  price: number;
  name: string;
  quantity: number;
  category: string;
  brand: string;
}

const UserSchema = new mongoose.Schema<UserInterface>(
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
    collection: "users",
  }
);

const User = mongoose.model("User", UserSchema, "users");

export default User;
