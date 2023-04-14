import { verify } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
): any => {
  if (!req.headers.authorization) {
    return res.status(403).json({ error: "No authorization found!" });
  }
  const token = req.headers.authorization.split(" ")[1];
  verify(token, process.env.JWT_SECRET || " ", (err: any, decoded: any) => {
    if (err && err.name === "TokenExpiredError") {
      res.status(401).json({ message: "Expired token" });
    } else if (err) {
      res.status(403).json({ message: "Inviled Token" });
    } else {
      res.locals.user = decoded;
      return next();
    }
  });
};
