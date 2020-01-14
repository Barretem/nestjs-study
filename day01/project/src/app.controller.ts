import { Controller, Get, Post, Delete } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('index')
  getIndex(): string {
    return '您好！！';
  }

  @Get('hello')
  hello(): string {
    return this.appService.getWorld();
  }
}
