import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.NATS,
    options: {
      servers: ['nats://localhost:4222'],
    },
  });
  app.useGlobalPipes(
    new ValidationPipe({
      // disableErrorMessages: true,
    }),
  );
  await app.startAllMicroservices();
  await app.listen(3000);

  //* ne peut ecouter que les requetes nats
  // const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
  //   transport: Transport.NATS,
  //   options: {
  //     servers: ['nats://localhost:4222'],
  //   },
  // });
  // await app.listen();

  //* ne peut ecouter que les requetes http classique
  // const app = await NestFactory.create(AppModule);
  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     // disableErrorMessages: true,
  //   }),
  // );
  // await app.listen(3000);
}
bootstrap();

