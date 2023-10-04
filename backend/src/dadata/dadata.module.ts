import { Module } from '@nestjs/common';
import { DadataController } from './dadata.controller';
import { DadataService } from './dadata.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [PrismaModule, HttpModule],
  controllers: [DadataController],
  providers: [DadataService],
})
export class DadataModule {}
