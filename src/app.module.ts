import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from '@thallesp/nestjs-better-auth';
import { auth } from './auth/auth';
import { ProfileController } from './profile.controller';

@Module({
  imports: [
    AuthModule.forRoot({
      auth,
      
    }),
  ],
  controllers: [AppController, ProfileController],
  providers: [AppService],
})
export class AppModule {}
