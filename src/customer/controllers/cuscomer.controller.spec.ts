import { Test, TestingModule } from '@nestjs/testing';
import { CuscomerController } from './customer.controller';

describe('CuscomerController', () => {
  let controller: CuscomerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CuscomerController],
    }).compile();

    controller = module.get<CuscomerController>(CuscomerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
