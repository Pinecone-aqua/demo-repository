import {
  Controller,
  Get,
  Next,
  Request as Req,
  Response as Res,
} from '@nestjs/common';
import { GoogleLoginService } from './google-login.service';
import { NextFunction, Request, Response } from 'express';

@Controller()
export class GoogleLoginController {
  constructor(private readonly googleLoginService: GoogleLoginService) {}

  @Get('google-login')
  googleLogin() {
    try {
      return this.googleLoginService.googleLogin();
    } catch (error) {
      return error.message;
    }
  }

  @Get('google/callback')
  verifyGoogle(@Req() req: Request, @Res() res: Response) {
    try {
      return this.googleLoginService.verifyGoogle(req, res);
    } catch (error) {
      return error.message;
    }
  }
}
