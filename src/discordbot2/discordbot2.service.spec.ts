import { Test, TestingModule } from '@nestjs/testing';
import { Discordbot2Service } from './discordbot2.service';

describe('Discordbot2Service', () => {
  let service: Discordbot2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Discordbot2Service],
    }).compile();

    service = module.get<Discordbot2Service>(Discordbot2Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
