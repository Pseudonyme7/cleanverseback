// auth.controller.ts
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { Request, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { CreateStudentDto } from 'src/DTOs/create-student.dto';
import { CreateTeacherDto } from 'src/DTOs/create-teacher.dto';


@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
  ) {}

  // Endpoint pour la connexion (login)
  @Post('login')
  // async login(@Body() loginUserDto: any) {
  //   try {
  //     // Appelez la méthode validateUser de votre service AuthService pour valider les identifiants
  //     const user = await this.authService.validateUser(loginUserDto);

  //     if (!user) {
  //       throw new UnauthorizedException('Invalid credentials');
  //     }

  //     // Générez un jeton d'authentification (vous pouvez utiliser votre méthode generateToken)
  //     const token = await this.authService.generateToken(user);

  //     // Retournez le jeton d'authentification
  //     return { access_token: token };
  //   } catch (error) {
  //     // Gérez les erreurs de connexion ici
  //     throw new UnauthorizedException('Login failed', error.message);
  //   }
  // }
  @Post('login')
  async login(@Body() loginUserDto: any) {
    try {
      // Appelez la méthode validateUser de votre service AuthService pour valider les identifiants
      const user = await this.authService.validateUser(loginUserDto);
  
      // Générez un jeton d'authentification (vous pouvez utiliser votre méthode generateToken)
      const token = await this.authService.generateToken(user);
  
      // Retournez le jeton d'authentification
      return { access_token: token };
    } catch (error) {
      // Gérez les erreurs de connexion ici
      throw new UnauthorizedException('Login failed', error.message);
    }
  }
  
  // Endpoint pour la déconnexion (logout)
  @Post('logout')
  async logout(@Request() req: any) {
    try {
      // Ajoutez la logique de déconnexion ici (par exemple, invalidation du jeton)
      
      return { message: 'Logged out successfully' };
    } catch (error) {
      // Gérez les erreurs de déconnexion ici
      throw new UnauthorizedException('Logout failed', error.message);
    }
  }

}
