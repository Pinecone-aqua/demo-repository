import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User, UpdateUserInput } from './user.schema';
import { CheckRoleGuard } from 'src/role/role.guard';
import { JwtService } from '@nestjs/jwt';
import { CheckRole } from 'src/role/role.decorator';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

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
    try {
      return this.userService.getUsers();
    } catch (error) {
      return error.message;
    }
  }

  @Get(':id')
  getUser(@Param('id') _id: string) {
    try {
      return this.userService.getUserById(_id);
    } catch (error) {
      return error.message;
    }
  }

  @Patch(':id')
  @UseGuards(CheckRoleGuard)
  @CheckRole('MODERATOR', 'ADMIN')
  updateUser(
    @Param('id') _id: string,
    @Body() updateUserInput: UpdateUserInput,
  ) {
    try {
      return this.userService.updateUser(_id, updateUserInput);
    } catch (error) {
      return error.message;
    }
  }

  @Delete(':id')
  @UseGuards(CheckRoleGuard)
  @CheckRole('MODERATOR', 'ADMIN')
  deleteUser(@Param('id') _id: string) {
    try {
      return this.userService.removeUser(_id);
    } catch (error) {
      return error.message;
    }
  }
}
