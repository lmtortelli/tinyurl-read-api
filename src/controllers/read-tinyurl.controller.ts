import { Controller, Get, CacheKey, UseInterceptors, CacheInterceptor } from '@nestjs/common';
import { ReadApiService } from '../services/read-api.service';
import { MessagePattern } from "@nestjs/microservices";
import { ReadDto } from '../entity/dto/ReadDto';


@Controller()
@UseInterceptors(CacheInterceptor)
export class ReadTinyUrlController {
  constructor(private readonly readApiService: ReadApiService) {}

  @MessagePattern("read_url")
  public getUrl(payload : ReadDto) {
   
    return this.readApiService.getUrl(payload);
  }
}
