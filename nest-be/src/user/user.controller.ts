import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User, updateUserInput } from './user.schema';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('add')
  createUser(@Body() createUserInput: User) {
    try {
      return this.userService.createUser(createUserInput);
    } catch (error) {
      return error.message;
    }
  }

  @Get('all')
  getAllUsers() {
    return this.userService.getUsers();
  }

  @Get(':id')
  getUser(@Param('id') _id: string) {
    return this.userService.getUserById(_id);
  }

  @Patch(':id')
  updateUser(
    @Param('id') _id: string,
    @Body() updateUserInput: updateUserInput,
  ) {
    return this.userService.updateUser(_id, updateUserInput);
  }

  @Delete(':id')
  deleteUser(@Param('id') _id: string) {
    return this.userService.removeUser(_id);
  }
}
