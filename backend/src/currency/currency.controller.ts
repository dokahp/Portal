import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { CurrencyService } from './currency.service';

@Controller('currency')
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}

  @Get(':abbreviation')
  async getCurrencyById(@Param('abbreviation') abbreviation: string) {
    const currency = await this.currencyService.getCurrencyById(abbreviation);
    if (!currency) {
      throw new HttpException('Error: no such currency', HttpStatus.NOT_FOUND);
    }
    return currency;
  }
}
