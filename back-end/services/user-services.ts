import { User } from "../model";

export async function getUser(userId: string): Promise<any> {
  const user = await User.findOne({ _id: userId }).limit(1);
  return user;
}
