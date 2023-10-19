import { Test, TestingModule } from '@nestjs/testing';
import { TraceAudioService } from './trace-audio.service';

describe('TraceAudioService', () => {
  let service: TraceAudioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TraceAudioService],
    }).compile();

    service = module.get<TraceAudioService>(TraceAudioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
