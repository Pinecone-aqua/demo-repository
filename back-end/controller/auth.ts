import { Request, Response, NextFunction } from "express";
import { User } from "../model";
import * as queryString from "query-string";
import axios from "axios";
import { UserType } from "../util/types";
import { sign } from "jsonwebtoken";

export const login = (req: Request, res: Response): any => {
  const { email, password } = req.body;

  // temprory implementation
  if (password !== "password")
    return res.status(404).send("Password do not match");

  User.findOne({ email: email }, (error: Error, result: UserType) => {
    if (error) {
      res.status(400).send(`Something went wrong Error: ${error}`);
    } else {
      if (result) {
        //generating jwt token
        const token = sign(
          { id: result._id, email: result.email },
          process.env.JWT_SECRET || "",
          {
            expiresIn: "1d",
          }
        );
        res.status(200).send({ success: true, user: result, token: token });
      } else {
        res
          .status(400)
          .send({ success: false, result: "Invalid user information" });
      }
    }
  });
};

export const register = (req: Request, res: Response): void => {
  const { phone, email, name, image, role } = req.body;
  User.findOne({ email: email }, async (error: Error, result: UserType) => {
    if (error) {
      res.status(400).send(`Something went wrong Error: ${error}`);
    } else {
      if (result) {
        res.status(409).send({ success: false, error: "User already exists" });
      } else {
        const user = new User({ phone, email, name, image, role });
        await user.save();
        res.status(200).send({
          success: true,
          text: "Account has been successfully created",
          user: user,
        });
      }
    }
  });
};

export const googleLogin = (req: Request, res: Response): void => {
  const stringifiedParams = queryString.stringify({
    client_id: process.env.CLIENT_ID,
    redirect_uri: `http://localhost:${process.env.PORT}/google/callback`,
    scope: [
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/userinfo.profile",
    ].join(" "),
    response_type: "code",
    access_type: "offline",
    prompt: "consent",
  });
  res.send(`https://accounts.google.com/o/oauth2/v2/auth?${stringifiedParams}`);
};

export const verifyGoogle = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { code } = req.query;
  const { access_token } = await getAccessTokenFromCode(code);
  const user = await getGoogleUserInfo(access_token);
  res.locals.user = user;
  next();
};

async function getAccessTokenFromCode(code: any) {
  try {
    const { data } = await axios({
      url: `https://oauth2.googleapis.com/token`,
      method: "post",
      data: {
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        grant_type: "authorization_code",
        redirect_uri: `http://localhost:${process.env.PORT}/google/callback`,
        code: code,
      },
    });
    return { access_token: data.access_token };
  } catch (err: any) {
    console.log("error: ", err);
    return { err };
  }
}
async function getGoogleUserInfo(access_token: string) {
  const { data } = await axios({
    url: "https://www.googleapis.com/oauth2/v2/userinfo",
    method: "get",
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  return data;
}

export const getUserInfo = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { user } = res.locals;
  try {
    const result = await User.find({ email: user.email }).exec();
    if (result && result.length > 0) {
      const token = sign(
        { id: result[0]._id, email: result[0].email },
        process.env.JWT_SECRET || "",
        {
          expiresIn: "1d",
        }
      );
      res
        .cookie("token", token)
        .status(200)
        .redirect(`http://localhost:${process.env.CLIENT_PORT}`);
    } else {
      const newUser = new User({
        email: user.email,
        name: user.name,
        image: user.picture,
      });
      await newUser.save();
      res.status(200).redirect(`http://localhost:${process.env.CLIENT_PORT}`);
    }
  } catch (error) {
    res.status(400).send(`Something went wrong Error: ${error}`);
  }
};
