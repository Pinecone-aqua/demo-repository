import mongoose from "mongoose";

interface CategpryInterface {
  name: string;
  img: string;
}

const CategprySchema = new mongoose.Schema<CategpryInterface>(
  {
    name: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: false,
    },
  },
  {
    collection: "categories",
  }
);

const Category = mongoose.model("Category", CategprySchema, "categories");

export default Category;
