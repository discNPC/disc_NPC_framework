import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NpcAgentModule } from './npc-agent/npc-agent.module';
import { DiscordModule } from './discord/discord.module';
import { Discordbot1Module } from './discordbot1/discordbot1.module';
import { Discordbot2Module } from './discordbot2/discordbot2.module';

@Module({
  imports: [NpcAgentModule, DiscordModule, Discordbot1Module, Discordbot2Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
