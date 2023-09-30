import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsService } from './students/students.service';
import { StudentsController } from './students/students.controller';
import { AuthModule } from './auth/auth.module';
import { TeachersController } from './teachers/teachers.controller';
import { TeachersService } from './teachers/teachers.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { NotificationsController } from './notifications/notifications.controller';
import { NotificationsService } from './notifications/notifications.service';
import { PublicationsController } from './publications/publications.controller';
import { PublicationsService } from './publications/publications.service';

@Module({
  imports: [AuthModule],
  controllers: [AppController, StudentsController, TeachersController, AuthController, PublicationsController, NotificationsController],
  providers: [AppService, StudentsService, TeachersService, AuthService, NotificationsService, PublicationsService],
})
export class AppModule {}
