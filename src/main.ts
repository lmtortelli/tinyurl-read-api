import { NestFactory } from '@nestjs/core';
import { Transport } from "@nestjs/microservices";
import { AppModule } from './app.module';
require('dotenv').config()

async function bootstrap() {
    const app = await NestFactory.createMicroservice(AppModule, {
      transport: Transport.TCP,
      options: {
        host: "127.0.0.1",
        port: process.env.PORT
      }
    });
    app.listen(() => console.log("Read-API A is listening on port " +process.env.PORT));
}
bootstrap();
