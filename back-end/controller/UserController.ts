import express, { Request, Response } from "express";
import {
  createUser,
  deleteUser,
  getAllUser,
  getUser,
  updateUser,
} from "../services/user-services";
import { verifyToken } from "../middlewares/verifyToken";
import { roleCheck } from "../middlewares/roleCheck";
export const userRouter = express.Router();

// create user

userRouter.post("/", async (req: Request, res: Response) => {
  try {
    const user = await createUser(req.body);
    return res.status(200).send(user);
  } catch (err) {
    return res.send({ error: err });
  }
});

// find user by id
userRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    const user = await getUser(req.params.id);
    return res.status(200).send(user);
  } catch (err) {
    return res.send({ error: err });
  }
});

// get all users
userRouter.get("/", async (req: Request, res: Response) => {
  const user = await getAllUser();
  return res.status(200).send(user);
});

// update user
userRouter.put("/:id", async (req: Request, res: Response) => {
  try {
    const user = await updateUser(req.params.id, req.body);
    return res.status(200).send(user);
  } catch (err) {
    return res.send({ error: err });
  }
});

// delete user
userRouter.delete(
  "/:id",
  verifyToken,
  roleCheck(["client"]),
  async (req: Request, res: Response) => {
    try {
      const user = await deleteUser(req.params.id);
      return res.status(200).send(user);
    } catch (err) {
      return res.send({ error: err });
    }
  }
);
