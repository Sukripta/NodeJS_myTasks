import { Test, TestingModule } from '@nestjs/testing';
import { MovieController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: MovieController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MovieController],
      providers: [AppService],
    }).compile();

    appController = app.get<MovieController>(MovieController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
