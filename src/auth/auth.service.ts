// service d'authentification avec génération du token
import { Injectable, UnauthorizedException, Logger } from '@nestjs/common';
import { StudentsService } from '../students/students.service';
import { TeachersService } from '../teachers/teachers.service';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private readonly studentsService: StudentsService,
    private readonly teachersService: TeachersService,
  ) {}

  async validateUser(loginUserDto: any): Promise<any> {
    const { email, password } = loginUserDto;
    // je recherche les utilisateurs par l'email avec la fonction findByEmail... puis vérifie que le password correspond à l'email
    const teacher = await this.teachersService.findByEmailTeacher(email);
    const student = await this.studentsService.findByEmailStudent(email);

    if (student) {
      
      //ici je vérifie que les 2 mots de passe sont identiques en comparant les empreintes
      const isPasswordValid = await bcrypt.compare(password, student.password);

      if (isPasswordValid) {
        this.logger.log(`Étudiant connecté : ${student.email}`);
        return {
          user: student,
          message: "Vous êtes connecté en tant qu'étudiant, bravo!",
        };
      }
    }

    if (teacher) {
      
      //ici je vérifie que les 2 mots de passe sont identiques en comparant les empreintes
      const isPasswordValid = await bcrypt.compare(password, teacher.password);

      if (isPasswordValid) {
        this.logger.log(`Enseignant connecté : ${teacher.email}`);
        return {
          user: teacher,
          message: "Vous êtes connecté en tant qu'enseignant, bravo!",
        };
      }
    }
    
    throw new UnauthorizedException('Invalid credentials');
  }
  //génération du token quand l'utilisateur est connecté
  async generateToken(user: any): Promise<string> {
    // Implémentez la logique de génération de jeton ici
    return 'voici un exemple de token car tu es connecté';
  }
}
