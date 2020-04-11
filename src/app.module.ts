import { Module, CacheModule, CacheInterceptor } from '@nestjs/common';
import { ReadTinyUrlController } from './controllers/read-tinyurl.controller';
import { ReadApiService } from './services/read-api.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TinyUrl } from './entity/TinyUrl.entity';
import * as redisStore from 'cache-manager-redis-store';
import { APP_INTERCEPTOR } from '@nestjs/core';


@Module({
  imports: [
    
    CacheModule.register({
      ttl : 120,
      max : 100,

    }),

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
    ReadApiService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class AppModule {}
