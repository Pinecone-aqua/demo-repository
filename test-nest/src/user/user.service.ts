import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  users = [{ name: 'bagalzuur', age: 13 }];
  getAllUsers() {
    return this.users;
  }

  addUser(user) {
    this.users.push(user);
    return 'success';
  }
  getUser(name: string) {
    return this.users.filter((user) => user.name == name);
  }
}
