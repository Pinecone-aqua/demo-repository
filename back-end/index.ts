import express, { Express, Request, Response } from "express";
import * as dotenv from "dotenv";
// import restaurantRoute from "./controller/RestaurantsRouter";
import db from "./config/mongoose-config";
import movieRouter from "./controller/MovieRouter";
import cors from "cors";
dotenv.config();

const app: Express = express();
const port: string | undefined = process.env.PORT;
app.use(cors());
app.use(movieRouter);

db.once("open", () => {
  console.log("connected successfully");
});
db.on("error", (error) => {
  console.log("Error connecting to database:", error);
});

app.listen(port, (): void => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
