import { Injectable, Logger } from '@nestjs/common';
import { Client, TextChannel } from 'discord.js';
import * as dotenv from 'dotenv';
import { NpcAgentService } from 'src/npc-agent/npc-agent.service';
dotenv.config();

const token = process.env.DISCORD_TOKEN2;

@Injectable()
export class Discordbot2Service {
  private readonly logger = new Logger(Discordbot2Service.name);
  private readonly client: Client;

  constructor(private readonly agentService: NpcAgentService) {
    this.client = new Client({
      intents: ['Guilds', 'GuildMessages', 'DirectMessages', 'MessageContent'],
    });
    // Login to Discord with your bot's token
    this.client.login(token);
    this.client.once('ready', this.onReady);
    this.client.on('warn', this.onWarn);
    this.client.on('messageCreate', this.handleRecievedMessages);
  }

  onReady = async (client) => {
    this.logger.log(`Bot logged in as ${client.user.username}`);
  };

  onWarn = async (message) => {
    this.logger.warn(message);
  };

  handleRecievedMessages = async (message) => {
    if (message.author.username === `${process.env.BOT2_USERNAME}`) return;
    if (message.author.username === `${process.env.BOT1_USERNAME}`) {
      const npcAgent2 = await this.agentService.npcAgent2(
        `${message.content.trim()}`,
      );

      if (npcAgent2.reply) {
        const channel = this.client.channels.cache.get(
          `process.env.BOT_CHANNEL_ID`,
        );

        if (channel?.isTextBased()) {
          // Send a message to the target channel
          setTimeout(
            async () => {
              return await (<TextChannel>channel).send(`${npcAgent2.reply}`);
            },
            Number(process.env.CHAT_RESPONSE_TIME) || 1000,
          );
        }
      }
    }
  };
}
