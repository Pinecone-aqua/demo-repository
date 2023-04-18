import { User } from "../model";

export async function getUser(userId: string): Promise<any> {
  const user = await User.findOne({ _id: userId }).limit(1);
  return user;
}

export async function getAllUser(): Promise<any> {
  const users = await User.find();
  return users;
}
