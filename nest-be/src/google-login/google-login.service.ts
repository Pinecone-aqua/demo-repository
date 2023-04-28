import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Request, Response } from 'express';
import * as queryString from 'query-string';
import { getAccessTokenFromCode } from './getAccessTokenFromCode';
import { getGoogleUserInfo } from './getGoogleUserInfo';

@Injectable()
export class GoogleLoginService {
  constructor(private readonly httpService: HttpService) {}

  googleLogin() {
    console.log(process.env.CLIENT_ID);
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

  async verifyGoogle(req: Request, res: Response) {
    const { code } = req.query;
    const access_token = await getAccessTokenFromCode(code);
    const user: any = await getGoogleUserInfo(access_token);
    console.log(user);
    res.locals.user = user;
    res.status(200).redirect(`http://localhost:${process.env.CLIENT_PORT}`);
  }
}
