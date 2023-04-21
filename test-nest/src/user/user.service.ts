import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  getAllUsers() {
    return this.userModel.find({});
  }

  addUser(user) {
    try {
      const newUser = new this.userModel(user);
      newUser.save();
      return 'success';
    } catch (err) {
      return err.message;
    }
  }
}
