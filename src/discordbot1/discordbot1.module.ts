import { Module } from '@nestjs/common';
import { Discordbot1Service } from './discordbot1.service';
import { NpcAgentModule } from 'src/npc-agent/npc-agent.module';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [NpcAgentModule],
  providers: [Discordbot1Service],
})
export class Discordbot1Module {}
