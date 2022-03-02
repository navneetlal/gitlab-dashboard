import { VersioningType } from '@nestjs/common/enums';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import helmet from 'helmet';
import { AppModule } from './app.module';
import { PrismaService } from './prisma.service';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use(helmet())
  app.enableCors();
  app.enableVersioning({
    type: VersioningType.URI,
  });
  const prismaService: PrismaService = app.get(PrismaService);
  prismaService.enableShutdownHooks(app);
  await app.listen(3000);
}
bootstrap();
