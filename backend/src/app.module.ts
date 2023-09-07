import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { CurrencyModule } from './currency/currency.module';

@Module({
  imports: [ConfigModule.forRoot(), PrismaModule, CurrencyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
