// login pour student fonctionne mais sans teacher

// import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { StudentsService } from '../students/students.service';


// @Injectable()
// export class AuthService {
//   constructor(
//     private readonly studentsService: StudentsService,
//   ) {}

//   async validateUser(loginUserDto: any): Promise<any> {
//     const { email, password } = loginUserDto;

//     // Recherchez l'étudiant par son adresse e-mail
//     const student = await this.studentsService.findOneByEmailStudent(email);


//     // Si l'utilisateur est trouvé et que le mot de passe correspond
//     if (student && student.password === password) {
//       console.log('Étudiant connecté :', student.email);
//       return { user: student, message: 'Vous êtes connecté, bravo!' }; // Renvoyez l'étudiant avec un message
//     }

//     throw new UnauthorizedException('Invalid credentials'); // Si les identifiants ne sont pas valides, lancez une exception UnauthorizedException
//   }



//         async generateToken(user: any): Promise<string> {
//         // Implémentez la logique de génération de jeton ici (par exemple, JWT)
//         // Générez un jeton d'authentification et renvoyez-le
//         return 'example_token'; // Remplacez ceci par la logique réelle
//       }
//  }




//essai pour les 2 en meme temps







// ci dessous login teacher fonctionne mais sans student



// import { Injectable, UnauthorizedException, Logger } from '@nestjs/common';
// import { TeachersService } from '../teachers/teachers.service';

// @Injectable()
// export class AuthService {
//   private readonly logger = new Logger(AuthService.name);

//   constructor(private readonly teachersService: TeachersService) {}

//   async validateUser(loginUserDto: any): Promise<any> {
//     const { email, password } = loginUserDto;
//     this.logger.log(`Tentative de connexion avec l'e-mail : ${email} et le mot de passe : ${password}`);

//     try {
//       // Recherchez l'enseignant par son adresse e-mail
//       const teacher = await this.teachersService.findOneByEmailTeacher(email);

//       // Si l'enseignant est trouvé et que le mot de passe correspond
//       if (teacher && teacher.password === password) {
//         this.logger.log(`Enseignant connecté : ${teacher.email}`);
//         return { user: teacher, message: 'Vous êtes connecté, bravo!' };
//       }

//       // Si l'enseignant n'est pas trouvé ou si le mot de passe ne correspond pas
//       throw new UnauthorizedException('Invalid credentials');
//     } catch (error) {
//       this.logger.error(`Erreur d'authentification : ${error.message}`);
//       throw new UnauthorizedException('Invalid credentials');
//     }
//   }

//   async generateToken(user: any): Promise<string> {
//     // Implémentez la logique de génération de jeton ici (par exemple, JWT)
//     // Générez un jeton d'authentification et renvoyez-le
//     return 'example_token yes tu es connecté voici un token'; // Remplacez ceci par la log
//   }}


import { Injectable, UnauthorizedException, Logger } from '@nestjs/common';
import { StudentsService } from '../students/students.service';
import { TeachersService } from '../teachers/teachers.service';

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

  if (students.length > 0) {
      const student = students[0];
      if (student.password === password) {
          this.logger.log(`Étudiant connecté : ${student.email}`);
          return { user: student, message: 'Vous êtes connecté en tant qu\'étudiant, bravo!' };
      }
  }

  if (teachers.length > 0) {
      const teacher = teachers[0];
      if (teacher.password === password) {
          this.logger.log(`Enseignant connecté : ${teacher.email}`);
          return { user: teacher, message: 'Vous êtes connecté en tant qu\'enseignant, bravo!' };
      }
  }

  throw new UnauthorizedException('Invalid credentials');
}
async generateToken(user: any): Promise<string> {
  // Implémentez la logique de génération de jeton ici (par exemple, JWT)
  // Générez un jeton d'authentification et renvoyez-le
  return 'example_token'; // Remplacez ceci par la logique réelle
}
}

