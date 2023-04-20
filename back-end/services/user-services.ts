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
  updateUserInput: UserType
): Promise<any> {
  return await User.findByIdAndUpdate(id, updateUserInput);
}

export async function deleteUser(_id: string): Promise<any> {
  return await User.deleteOne({ _id });
}

export async function createUser(createUserInput: UserType): Promise<any> {
  const user = new User(createUserInput);
  return await user.save();
}
