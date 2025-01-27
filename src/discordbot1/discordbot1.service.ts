import { Injectable, Logger } from '@nestjs/common';
import { Client, TextChannel } from 'discord.js';
import { NpcAgentService } from 'src/npc-agent/npc-agent.service';

const token = process.env.DISCORD_TOKEN1;

@Injectable()
export class Discordbot1Service {
  private readonly logger = new Logger(Discordbot1Service.name);
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
    this.client.once('ready', this.startMessages);
  }

  onReady = async (client) => {
    this.logger.log(`Bot logged in as ${client.user.username}`);
  };

  onWarn = async (message) => {
    this.logger.warn(message);
  };

  handleRecievedMessages = async (message) => {
    if (message.author.username === `${process.env.BOT1_USERNAME}`) return;
    if (message.author.username === `${process.env.BOT2_USERNAME}`) {
      const npcAgent1 = await this.agentService.npcAgent1(
        `${message.content.trim()}`,
      );

      if (npcAgent1.reply) {
        const channel = this.client.channels.cache.get(
          `process.env.BOT_CHANNEL_ID`,
        );

        if (channel?.isTextBased()) {
          // Send a message to the target channel
          setTimeout(
            async () => {
              return await (<TextChannel>channel).send(`${npcAgent1.reply}`);
            },
            Number(process.env.CHAT_RESPONSE_TIME) || 1000,
          );
        }
      }
    }
  };

  startMessages = async () => {
    const npcAgent1 = await this.agentService.randomStartChat();

    if (npcAgent1.reply) {
      const channel = this.client.channels.cache.get(
        `process.env.BOT_CHANNEL_ID`,
      );

      if (channel?.isTextBased()) {
        // Send a message to the target channel
        setTimeout(
          async () => {
            return await (<TextChannel>channel).send(`${npcAgent1.reply}`);
          },
          Number(process.env.CHAT_RESPONSE_TIME) || 1000,
        );
      }
    }
  };
}
