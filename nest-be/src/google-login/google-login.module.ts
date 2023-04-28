import { Module } from '@nestjs/common';
import { GoogleLoginController } from './google-login.controller';
import { GoogleLoginService } from './google-login.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [GoogleLoginController],
  providers: [GoogleLoginService],
})
export class GoogleLoginModule {}
