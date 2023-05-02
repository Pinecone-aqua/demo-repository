import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Request as Req,
  Response as Res,
} from '@nestjs/common';
import * as queryString from 'query-string';
import { Request, Response } from 'express';
import { getAccessTokenFromCode } from './getAccessTokenFromCode';
import { getGoogleUserInfo } from './getGoogleUserInfo';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/user.schema';

@Controller()
export class GoogleLoginController {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  @Get('google-login')
  googleLogin() {
    const stringifiedParams = queryString.stringify({
      client_id: process.env.CLIENT_ID,
      redirect_uri: `http://localhost:${process.env.PORT}/google/callback`,
      scope: [
        'https://www.googleapis.com/auth/userinfo.email',
        'https://www.googleapis.com/auth/userinfo.profile',
      ].join(' '),
      response_type: 'code',
      access_type: 'offline',
      prompt: 'consent',
    });
    return `https://accounts.google.com/o/oauth2/v2/auth?${stringifiedParams}`;
  }

  @Get('google/callback')
  async verifyGoogle(@Req() req: Request, @Res() res: Response) {
    const { code } = req.query;

    if (!code) throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);

    const accessToken = await getAccessTokenFromCode(code);
    if (!accessToken)
      throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);

    const profile: any = await getGoogleUserInfo(accessToken);
    console.log(profile);

    let user = await this.userService.findByEmail(profile.email);

    if (!user) {
      const userInput: User = {
        email: profile.email,
        name: profile.name,
        phoneNumber: null,
        role: 'CLIENT',
      };
      user = await this.userService.createUser(userInput);
    }

    const payload = {
      name: user.name,
      email: user.email,
      role: user.role,
      phoneNumber: user?.phoneNumber,
    };
    const token = this.jwtService.sign(payload);
    res
      .status(200)
      .cookie('token', token)
      .redirect(`http://localhost:${process.env.CLIENT_PORT}`);
  }
}
