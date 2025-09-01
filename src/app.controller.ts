import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller({ path: 'api', version: '1' })
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('users')
  getUsers() {
    return this.appService.getUsers();
  }

  @Get('status')
  getStatus() {
    return this.appService.getStatus();
  }
}
