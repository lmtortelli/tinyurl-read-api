import { Injectable } from '@nestjs/common';
import { TinyUrl } from './entity/TinyUrl.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AppService {

  constructor(
    @InjectRepository(TinyUrl)
    private tinyUrlRepository: Repository<TinyUrl>,
  ) {
  }

  public async getUrl(keyUrl : String) : Promise<String> {

    let content_url = await this.tinyUrlRepository.findOne({key_url : keyUrl})
    
    return content_url.original_url
  }
}
