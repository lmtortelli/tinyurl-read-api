import { Controller, Get, CacheKey, UseInterceptors, CacheInterceptor } from '@nestjs/common';
import { ReadApiService } from '../services/read-api.service';
import { MessagePattern } from "@nestjs/microservices";
import { ReadDto } from '../entity/dto/ReadDto';
import { TinyUrlCache } from '../utils/interceptors/TinyUrlCache';


@Controller()
@UseInterceptors(CacheInterceptor)
export class ReadTinyUrlController {
  constructor(private readonly readApiService: ReadApiService) {}

  @MessagePattern("read_url")
  @UseInterceptors(TinyUrlCache)
  public getUrl(payload : ReadDto) {
    return this.readApiService.getUrl(payload);
  }
}
