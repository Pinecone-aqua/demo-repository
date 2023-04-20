import mongoose from "mongoose";

interface BrandInterface {
  name: string;
  img: string;
}

const BrandSchema = new mongoose.Schema<BrandInterface>(
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
    collection: "brands",
  }
);

const Brand = mongoose.model("Brand", BrandSchema, "brands");

export default Brand;
