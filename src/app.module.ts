import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsService } from './students/students.service';
import { StudentsController } from './students/students.controller';
import { AuthModule } from './auth/auth.module';
import { TeachersController } from './teachers/teachers.controller';
import { TeachersService } from './teachers/teachers.service';

@Module({
  imports: [AuthModule],
  controllers: [AppController, StudentsController, TeachersController],
  providers: [AppService, StudentsService, TeachersService],
})
export class AppModule {}
