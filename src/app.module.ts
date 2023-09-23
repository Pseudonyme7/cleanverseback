import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { StudentsService } from './students/students.service';
import { StudentsController } from './students/students.controller';

@Module({
  imports: [],
  controllers: [AppController, UserController, StudentsController],
  providers: [AppService, UserService, StudentsService],
})
export class AppModule {}
