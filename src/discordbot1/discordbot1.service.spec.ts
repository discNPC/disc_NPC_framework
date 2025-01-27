import { Test, TestingModule } from '@nestjs/testing';
import { Discordbot1Service } from './discordbot1.service';

describe('Discordbot1Service', () => {
  let service: Discordbot1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Discordbot1Service],
    }).compile();

    service = module.get<Discordbot1Service>(Discordbot1Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
