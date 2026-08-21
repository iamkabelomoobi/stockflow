import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import type { INestApplication } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  let app: INestApplication | undefined;

  try {
    app = await NestFactory.create(AppModule);
    await app.listen(process.env.PORT ?? 3000);
  } catch (error) {
    Logger.error('Application startup failed', error, 'Bootstrap');
    await app?.close();
    process.exitCode = 1;
  }
}

void bootstrap();
