import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bodyParser: false,
  });
  app.enableCors({
    origin: process.env.FRONTEND_URL 
      ? ["http://localhost:3000", process.env.FRONTEND_URL]
      : "http://localhost:3000",
    credentials: true,
  })
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
