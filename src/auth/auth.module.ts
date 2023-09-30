// auth.module.ts

import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { LocalService } from './local/local.service'; 
import { TeachersService } from '../teachers/teachers.service'; 
import { StudentsService } from '../students/students.service';


@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'local' }), 
  ],
  providers: [AuthService, LocalService, TeachersService, StudentsService],
  controllers: [],
  exports: [AuthService],
})
export class AuthModule {}




