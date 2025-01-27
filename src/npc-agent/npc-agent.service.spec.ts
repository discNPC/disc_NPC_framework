import { Test, TestingModule } from '@nestjs/testing';
import { NpcAgentService } from './npc-agent.service';

describe('NpcAgentService', () => {
  let service: NpcAgentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NpcAgentService],
    }).compile();

    service = module.get<NpcAgentService>(NpcAgentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
