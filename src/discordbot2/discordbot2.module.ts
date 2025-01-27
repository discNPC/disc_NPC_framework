import { Module } from '@nestjs/common';
import { Discordbot2Service } from './discordbot2.service';
import { NpcAgentModule } from 'src/npc-agent/npc-agent.module';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [NpcAgentModule],
  providers: [Discordbot2Service],
})
export class Discordbot2Module {}
