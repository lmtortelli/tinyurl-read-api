import { Injectable } from '@nestjs/common';
import { TinyUrl } from '../entity/TinyUrl.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ReadDto } from '../entity/dto/ReadDto';

@Injectable()
export class ReadApiService {

  constructor(
    @InjectRepository(TinyUrl)
    private tinyUrlRepository: Repository<TinyUrl>,
  ) {
  }

  public async getUrl(readDto : ReadDto) : Promise<String> {

    let urlModel = await this.tinyUrlRepository.findOne({key_url : readDto.keyUrl})
    
    if(!urlModel) {
      return 
    }
    
    return urlModel.original_url
  }
}
