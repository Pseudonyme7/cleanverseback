import { Injectable, UnauthorizedException, Logger } from '@nestjs/common';
import { StudentsService } from '../students/students.service';
import { TeachersService } from '../teachers/teachers.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private readonly studentsService: StudentsService,
    private readonly teachersService: TeachersService
  ) {}
async validateUser(loginUserDto: any): Promise<any> {
  const { email, password } = loginUserDto;

  const students = await this.studentsService.findOneByEmailStudent(email);
  const teachers = await this.teachersService.findOneByEmailTeacher(email);

  // if (students.length > 0) {
  //     const student = students[0];
  //     if (student.password === password) {
  //         this.logger.log(`Étudiant connecté : ${student.email}`);
  //         return { user: student, message: 'Vous êtes connecté en tant qu\'étudiant, bravo!' };
  //     }
  // }

  if (students.length > 0) {
    const student = students[0];
    const isPasswordValid = await bcrypt.compare(password, student.password);

    if (isPasswordValid) {
      this.logger.log(`Étudiant connecté : ${student.email}`);
      return { user: student, message: 'Vous êtes connecté en tant qu\'étudiant, bravo!' };
    }
  }

  // if (teachers.length > 0) {
  //     const teacher = teachers[0];
  //     if (teacher.password === password) {
  //         this.logger.log(`Enseignant connecté : ${teacher.email}`);
  //         return { user: teacher, message: 'Vous êtes connecté en tant qu\'enseignant, bravo!' };
  //     }
  // }
  if (teachers.length > 0) {
    const teacher = teachers[0];
    const isPasswordValid = await bcrypt.compare(password, teacher.password);

    if (isPasswordValid) {
      this.logger.log(`Enseignant connecté : ${teacher.email}`);
      return { user: teacher, message: 'Vous êtes connecté en tant qu\'enseignant, bravo!' };
    }
  }
  throw new UnauthorizedException('Invalid credentials');
}
async generateToken(user: any): Promise<string> {
  // Implémentez la logique de génération de jeton ici (par exemple, JWT)
  // Générez un jeton d'authentification et renvoyez-le
  return 'voici un exemple de token car tu es connecté'; // Remplacez ceci par la logique réelle
}
}

