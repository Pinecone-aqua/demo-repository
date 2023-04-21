import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

export class CreateUserInput {
  name: string;
  age: number;
}

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('all')
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Post('add')
  addUsers(@Body() newUserInput: CreateUserInput) {
    try {
      const newUser = {
        ...newUserInput,
        birthYear: 2023 - newUserInput.age,
      };
      return this.userService.addUser(newUser);
    } catch (e) {
      return e.message;
    }
  }
}
