import { Test, TestingModule } from '@nestjs/testing';
import { TraceAudioController } from './trace-audio.controller';

describe('TraceAudioController', () => {
  let controller: TraceAudioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TraceAudioController],
    }).compile();

    controller = module.get<TraceAudioController>(TraceAudioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
