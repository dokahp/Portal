import { Controller, Get } from '@nestjs/common';
import { NationalRateService } from './national-rate.service';
import { Cron, CronExpression } from '@nestjs/schedule';

@Controller('national-rate')
export class NationalRateController {
  constructor(private readonly nationalRateService: NationalRateService) {}

  @Get()
  async getTodayRates() {
    return await this.nationalRateService.getTodayRates();
  }

  @Cron(CronExpression.EVERY_HOUR)
  async getNationalRatesFromNbrb() {
    const todayRates = await this.nationalRateService.getTodayRates();
    if (!todayRates.length) {
      const fetchedRates = await this.nationalRateService.fetchTodayRates();
      const neededRates = this.nationalRateService.filterRates(fetchedRates);
      return this.nationalRateService.setTodayRates(neededRates);
    }
  }
}
