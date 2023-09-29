// auth.module.ts

import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { LocalService } from './local/local.service'; 
import { TeachersController } from '../teachers/teachers.controller'; 
import { TeachersService } from '../teachers/teachers.service'; 
import { StudentsController } from 'src/students/students.controller';
import { StudentsService } from '../students/students.service';
import { AuthController } from './auth.controller';


@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'local' }), 
  ],
  providers: [AuthService, LocalService, TeachersService, StudentsService], // Incluez le service d'authentification, la stratégie locale et le service utilisateur ici
  controllers: [], // Incluez le contrôleur utilisateur ici
  exports: [AuthService], // Exportez le service d'authentification si nécessaire
})
export class AuthModule {}




