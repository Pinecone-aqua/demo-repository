import { User } from "../model";
import { UserType } from "../util/types";

export async function getUser(userId: string): Promise<any> {
  const user = await User.findOne({ _id: userId }).limit(1);
  return user;
}

export async function getAllUser(): Promise<any> {
  const users = await User.find({});
  return users;
}

export async function updateUser(
  id: string,
  updateInput: UserType
): Promise<any> {
  return await User.findByIdAndUpdate(id, updateInput);
}

export async function deleteUser(id: string): Promise<any> {
  return await User.findByIdAndDelete(id);
}

export async function createUser(createInput: UserType): Promise<any> {
  const user = new User(createInput);
  return await user.save();
}
