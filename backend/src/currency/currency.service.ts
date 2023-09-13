import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CurrencyDTO } from './dto/currency.dto';
import { catchError, lastValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { AxiosError } from 'axios';

@Injectable()
export class CurrencyService {
  private readonly logger = new Logger(CurrencyService.name);
  constructor(
    private readonly prisma: PrismaService,
    private readonly httpService: HttpService,
  ) {}

  async getAllCurrencyList() {
    return await this.prisma.currency.findMany();
  }

  async getCurrencyById(id: number) {
    return await this.prisma.currency.findUnique({
      where: { Cur_ID: id },
    });
  }

  async fetchCurrencyList() {
    const { data } = await lastValueFrom(
      this.httpService
        .get<CurrencyDTO[]>(`https://api.nbrb.by/exrates/currencies`)
        .pipe(
          catchError((error: AxiosError) => {
            this.logger.error(error.response.data);
            throw 'An error happened when fetch currency list from nbrb';
          }),
        ),
    );

    return data;
  }

  async setCurrencyList(currency: CurrencyDTO[]) {
    const formattedCurrency = currency.map((el: CurrencyDTO) => {
      const Cur_DateStart = new Date(el.Cur_DateStart).toISOString();
      const Cur_DateEnd = new Date(el.Cur_DateEnd).toISOString();
      return { ...el, Cur_DateStart, Cur_DateEnd };
    });
    const currencyList = await this.prisma.currency.createMany({
      data: formattedCurrency,
      skipDuplicates: true,
    });
    if (!currencyList) {
      throw new HttpException('something wrong', HttpStatus.BAD_REQUEST);
    }
    return currencyList;
  }
}
