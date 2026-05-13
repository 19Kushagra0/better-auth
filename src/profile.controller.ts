import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard, Session } from '@thallesp/nestjs-better-auth';

@Controller('profile')
export class ProfileController {
  @Get('me')
  @UseGuards(AuthGuard) // This checks if the user is logged in
  getProfile(@Session() session: any) {
    return {
      message: 'Welcome to your secret profile!',
      user: session.user,
    };
  }
}
