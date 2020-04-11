import { Module } from '@nestjs/common';
import { ReadTinyUrlController } from './controllers/read-tinyurl.controller';
import { ReadApiService } from './services/read-api.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TinyUrl } from './entity/TinyUrl.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([TinyUrl]),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'tiny_url_api',
      entities : [TinyUrl],
      synchronize: true,
    }),
  ],
  controllers: [
    ReadTinyUrlController
  ],
  providers: [
    ReadApiService
  ],
})
export class AppModule {}
