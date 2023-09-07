import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CurrencyService {
  constructor(private readonly prisma: PrismaService) {}

  async getCurrencyById(abbreviation: string) {
    console.log(abbreviation);
    return await this.prisma.currency.findMany({
      where: { Cur_Abbreviation: abbreviation },
    });
  }
}
