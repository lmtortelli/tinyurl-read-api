import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from "@nestjs/microservices";
// import { ReadDto } from 'url-dto/read-api/ReadDto'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern("read_url")
  public getUrl(payload) {
    
    return this.appService.getUrl(payload['keyUrl']);
  }
}
