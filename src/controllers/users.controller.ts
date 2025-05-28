import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return 'lista de users';
  }

  @Get(':userId')
  getUser(@Param('userId') userId: number) {
    return `el id del user es ${userId}`;
  }
}
