import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { CurrencyModule } from './currency/currency.module';
import { NationalRateModule } from './national-rate/national-rate.module';
import { ScheduleModule } from '@nestjs/schedule';
import { DadataModule } from './dadata/dadata.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ScheduleModule.forRoot(),
    PrismaModule,
    CurrencyModule,
    NationalRateModule,
    DadataModule,
  ],
})
export class AppModule {}
