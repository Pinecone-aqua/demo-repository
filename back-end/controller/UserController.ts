import express, { Request, Response } from "express";
import { User } from "../model/User";
import { getAllUser, getUser } from "../services/user-services";
export const userRouter = express.Router();

//find user by id
userRouter.get("/:id", async (req: Request, res: Response) => {
  const user = await getUser(req.params.id);
  return res.status(200).send(user);
});

//get all users
userRouter.get("/", async (req: Request, res: Response) => {
  const user = await getAllUser();
  return res.status(200).send(user);
});

//get all users
userRouter.get("/all", async (req: Request, res: Response) => {
  const user = await User.find();
  return res.status(200).send(user);
});
