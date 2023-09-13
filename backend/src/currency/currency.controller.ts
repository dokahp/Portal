import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { CurrencyService } from './currency.service';
import { Cron, CronExpression } from '@nestjs/schedule';

@Controller('currency')
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}

  @Get()
  async getAllCurrencyList() {
    return await this.currencyService.getAllCurrencyList();
  }

  @Get(':id')
  async getCurrencyById(@Param('id', ParseIntPipe) id: number) {
    const currency = await this.currencyService.getCurrencyById(id);
    if (!currency) {
      throw new HttpException('Error: no such currency', HttpStatus.NOT_FOUND);
    }
    return currency;
  }

  @Cron(CronExpression.EVERY_DAY_AT_10AM)
  async getCurrencyListFromNbrb() {
    const fetchedData = await this.currencyService.fetchCurrencyList();
    return await this.currencyService.setCurrencyList(fetchedData);
  }
}
