import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://test:test@cluster0.8erw8jx.mongodb.net/sample_mflix?retryWrites=true&w=majority"
);

export default mongoose.connection;
