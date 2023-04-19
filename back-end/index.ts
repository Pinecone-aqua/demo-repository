import express, { Express, Request, Response } from "express";
import * as dotenv from "dotenv";
// import restaurantRoute from "./controller/RestaurantsRouter";
import db from "./config/mongoose-config";
import { productRouter, userRouter } from "./controller";
import cors from "cors";
import { getUserInfo, googleLogin, verifyGoogle } from "./controller/auth";
import { verifyToken } from "./middlewares/verifyToken";
dotenv.config();

const app: Express = express();
const port: string | undefined = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use("/product", productRouter);
app.use("/user", userRouter);
// app.use("/addUser", verifyToken,userRouter);
app.use("/google-login", googleLogin);
app.get("/google/callback", verifyGoogle, getUserInfo);

db.once("open", () => {
  console.log("connected successfully");
});
db.on("error", (error) => {
  console.log("Error connecting to database:", error);
});

app.listen(port, (): void => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
