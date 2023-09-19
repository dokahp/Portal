import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { nationalRateDto } from './dto/national-rate.dto';
import { catchError, lastValueFrom } from 'rxjs';
import { AxiosError } from 'axios';

@Injectable()
export class NationalRateService {
  private readonly logger = new Logger(NationalRateService.name);
  constructor(
    private readonly prisma: PrismaService,
    private readonly httpService: HttpService,
  ) {}

  async getTodayRates() {
    let lastDay: string | number = Date.now() - 24 * 60 * 60 * 1000;
    lastDay = new Date(lastDay).toISOString();
    return await this.prisma.nationalRate.findMany({
      where: {
        Date: {
          gte: lastDay,
        },
      },
      include: {
        Currency: {
          select: {
            Cur_Abbreviation: true,
            Cur_Scale: true,
            Cur_Name: true,
          },
        },
      },
    });
  }

  async setTodayRates(rates: nationalRateDto[]) {
    const changedRates = rates.map((rate: nationalRateDto) => {
      return {
        Date: new Date(rate.Date).toISOString(),
        Cur_OfficialRate: rate.Cur_OfficialRate,
        currencyCur_ID: rate.Cur_ID,
      };
    });
    return await this.prisma.nationalRate.createMany({
      data: [...changedRates],
      skipDuplicates: true,
    });
  }

  async fetchTodayRates() {
    const { data } = await lastValueFrom(
      this.httpService
        .get<nationalRateDto[]>(
          `https://api.nbrb.by/exrates/rates?periodicity=0`,
        )
        .pipe(
          catchError((error: AxiosError) => {
            this.logger.error(error.response.data);
            throw 'An error happened when fetch rates from nbrb';
          }),
        ),
    );
    return data;
  }

  filterRates(rates: nationalRateDto[]) {
    const neededRates = ['USD', 'EUR', 'RUB', 'CNY'];
    return rates.filter((rate: nationalRateDto) =>
      neededRates.includes(rate.Cur_Abbreviation),
    );
  }
}
