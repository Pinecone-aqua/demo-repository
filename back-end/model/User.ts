import mongoose from "mongoose";
import { UserType } from "../util/types";

const UserSchema = new mongoose.Schema<UserType>(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    role: {
      type: String,
      required: true,
      default: "client",
    },
  },
  {
    collection: "users",
  }
);

export const User = mongoose.model("User", UserSchema, "users");
