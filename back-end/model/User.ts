import mongoose from "mongoose";
import { UserType } from "../util/types";

const UserSchema = new mongoose.Schema<UserType>(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: false,
    },
    role: {
      type: String,
      default: "client",
    },
  },
  {
    collection: "users",
  }
);

export const User = mongoose.model("User", UserSchema, "users");
