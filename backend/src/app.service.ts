import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { CurrencyDTO } from './currency.dto';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  async userCount() {
    const count = await this.prisma.user.count();
    return {
      userCount: count,
    };
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
