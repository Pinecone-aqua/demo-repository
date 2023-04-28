import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UpdateUserInput } from './user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async getUsers() {
    return await this.userModel.find({}).sort({ role: 1 });
  }

  async findByEmail(email: string) {
    return await this.userModel.findOne({ email });
  }

  async createUser(user: User) {
    const newUser = new this.userModel(user);
    const result = await newUser.save();
    return result;
  }

  async getUserById(_id: string) {
    return await this.userModel.findOne({ _id });
  }

  async updateUser(_id: string, user: UpdateUserInput) {
    return await this.userModel.findOneAndUpdate({ _id }, user);
  }

  async removeUser(_id: string) {
    return await this.userModel.deleteOne({ _id });
  }
}
