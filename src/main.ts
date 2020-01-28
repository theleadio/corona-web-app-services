import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Apiv1Module } from './apiv1/apiv1.module';
import { Apiv2Module } from './apiv2/apiv2.module';
import { join } from 'path';
declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const options = new DocumentBuilder()
    .setTitle('KT Translation')
    .setDescription('澄思設計翻譯服務')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options, {
    include: [Apiv1Module],
  });

  SwaggerModule.setup('apidoc/v1', app, document);

  const optionsV2 = new DocumentBuilder()
    .setTitle('KT Translation')
    .setDescription('澄思設計翻譯服務')
    .setVersion('2.0')
    .addBearerAuth()
    .build();
  const documentV2 = SwaggerModule.createDocument(app, optionsV2, {
    include: [Apiv2Module],
  });

  SwaggerModule.setup('apidoc/v2', app, documentV2);

  const port = process.env.PORT || 3000;
  await app.listen(port).then(() => {
    console.log('MicroService is starting.');
  }).catch((error) => {
    console.error('Something wrong happened,', error);
  });

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
