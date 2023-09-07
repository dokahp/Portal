import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  async userCount() {
    const count = await this.prisma.user.count();
    return {
      userCount: count,
    };
  }
}
