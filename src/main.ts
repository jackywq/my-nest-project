import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 关键配置：启用 URI 版本控制
  app.enableVersioning({
    type: VersioningType.URI, // 版本通过 URL 路径传递
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
