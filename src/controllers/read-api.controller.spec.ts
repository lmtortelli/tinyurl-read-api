import { Test, TestingModule } from '@nestjs/testing';
import {ReadTinyUrlController} from './read-tinyurl.controller'
import { ReadApiService } from '../services/read-api.service'

describe('AppController', () => {
  let appController: ReadTinyUrlController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ReadTinyUrlController],
      providers: [ReadApiService],
    }).compile();

    appController = app.get<ReadTinyUrlController>(ReadTinyUrlController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      // expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
