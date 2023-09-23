import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(
    @Body() user: { username: string; password: string },
  ): Promise<any> {
    return this.userService.createUser(user.username, user.password);
  }

  // Add more routes as needed...
}
