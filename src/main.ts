import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './helpers/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  app.setGlobalPrefix('api');

  // filters
  app.useGlobalFilters(new HttpExceptionFilter());

  // documentation
  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Pix Saque')
    .setDescription('Pix Saque API description')
    .setVersion('1.0')
    .addTag('Auth')
    .addTag('Users')
    .addTag('Products')
    .addTag('Establishment Branchs')
    .addTag('Records')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  // running
  await app.listen(3344, () => {
    console.log('Server running on port 3344!');
  });
}
bootstrap();
