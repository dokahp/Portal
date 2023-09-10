import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CurrencyService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllCurrencyList() {
    return await this.prisma.currency.findMany();
  }

  async getCurrencyById(id: number) {
    return await this.prisma.currency.findUnique({
      where: { Cur_ID: id },
    });
  }
}
