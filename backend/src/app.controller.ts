import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUserCount() {
    return this.appService.userCount();
  }

  @Post('currency')
  setCurrencyList(@Body() currency: any) {
    return this.appService.setCurrencyList(currency);
  }
}
