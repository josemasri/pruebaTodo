import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Todo API')
    .setDescription('Simple To Do REST API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api-docs', app, document);

  const port = process.env.PORT || 3000;

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(port, () =>
    Logger.log(`App running on http://localhost:${port}`),
  );
}
bootstrap();
