import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { getUser } from "../services/user-services";

export const roleCheck =
  (allowedRoles: string[]) =>
  async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    const user = await getUser(res.locals.user.id);
    if (!user.role)
      return res
        .status(403)
        .send({ success: false, text: "Permission denied!!" });
    allowedRoles.includes(user.role)
      ? next()
      : res.status(403).send({ success: false, text: "Permission denied!" });
  };
