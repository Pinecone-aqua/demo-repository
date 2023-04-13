import express, { Express, Request, Response } from "express";
import * as dotenv from "dotenv";
// import restaurantRoute from "./controller/RestaurantsRouter";
import db from "./config/mongoose-config";
import { productRouter, userRouter } from "./controller";
import cors from "cors";
import { googleLogin } from "./controller/auth";
dotenv.config();

const app: Express = express();
const port: string | undefined = process.env.PORT;
app.use(cors());
app.use("/product", productRouter);
app.use("/user", userRouter);
app.use("/google", googleLogin);

db.once("open", () => {
  console.log("connected successfully");
});
db.on("error", (error) => {
  console.log("Error connecting to database:", error);
});

app.listen(port, (): void => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
