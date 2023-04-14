import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://orgilshdeee:Blacklist12345@cluster0.rdjpop9.mongodb.net/demo-repositary"
);

export default mongoose.connection;
