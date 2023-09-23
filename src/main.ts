import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Enable CORS for all routes (for development purposes)
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
