import { Module } from '@nestjs/common';
import { NpcAgentService } from './npc-agent.service';

@Module({
  providers: [NpcAgentService]
})
export class NpcAgentModule {}
