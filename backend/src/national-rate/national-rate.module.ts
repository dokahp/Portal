import { Module } from '@nestjs/common';
import { NationalRateController } from './national-rate.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { NationalRateService } from './national-rate.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [PrismaModule, HttpModule],
  controllers: [NationalRateController],
  providers: [NationalRateService],
})
export class NationalRateModule {}
