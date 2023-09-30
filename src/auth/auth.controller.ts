// auth.controller.ts
import { Body, Controller, Post } from '@nestjs/common';
import { Request, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

//Endpoint pour la connexion (login)
  @Post('login')
  async login(@Body() loginUserDto: any) {
    try {
      // Appel de la méthode validateUser du service AuthService pour valider les identifiants
      const user = await this.authService.validateUser(loginUserDto);

      // Génére un jeton d'authentification
      const token = await this.authService.generateToken(user);
      // Retourne le jeton d'authentification
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
