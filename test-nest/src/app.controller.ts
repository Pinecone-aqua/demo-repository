import { Body, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('products')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('bla')
  getHello(@Body() body: any): string {
    return this.appService.getHello();
  }
}
