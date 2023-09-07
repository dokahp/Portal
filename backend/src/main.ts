import { NestFactory } from '@nestjs/core';
import * as bodyParser from 'body-parser';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  // extend limit for big queries
  app.use(bodyParser.json({ limit: '50mb' }));
  await app.listen(3000);
}
bootstrap();
