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
import { AudiosController } from './audios/audios.controller';
import { AudiosService } from './audios/audios.service';
import { InstitutesController } from './institutes/institutes.controller';
import { InstitutesService } from './institutes/institutes.service';

@Module({
  imports: [AuthModule],
  controllers: [AppController, StudentsController, TeachersController, AuthController, PublicationsController, NotificationsController, AudiosController, InstitutesController],
  providers: [AppService, StudentsService, TeachersService, AuthService, NotificationsService, PublicationsService, AudiosService, InstitutesService],
})
export class AppModule {}
