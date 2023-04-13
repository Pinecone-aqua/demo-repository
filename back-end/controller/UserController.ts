import express, { Request, Response } from "express";
import User from "../model/User";
export const userRouter = express.Router();

//find user by id
userRouter.get("/:id", async (req: Request, res: Response) => {
  console.log(req.params.id);

  const user = await User.findOne({ _id: req.params.id }).limit(1);
  return res.status(200).send(user);
});

//get all users
userRouter.get("/", async (req: Request, res: Response) => {
  const user = await User.find({ poster: { $exists: true } })
    .limit(10)
    .select({ title: 1, _id: 1, poster: 1 });
  return res.status(200).send(user);
});

//get all users
userRouter.get("/all", async (req: Request, res: Response) => {
  const user = await User.find({ poster: { $exists: true } }).select({
    _id: 1,
  });
  return res.status(200).send(user);
});
