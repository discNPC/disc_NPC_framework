import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';

@Injectable()
export class NpcAgentService {
  private readonly openai: OpenAI;

  constructor() {
    this.openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  }

  async npcAgent1(message: string) {
    const prompt = `your Agent a prompt`;

    try {
      const response = await this.openai.chat.completions.create({
        messages: [
          { role: 'system', content: `${prompt}` },
          { role: 'user', content: `${message}` },
        ],
        model: 'gpt-4o-mini',
        temperature: 0.5,
        frequency_penalty: 1.5,
        presence_penalty: 1.0,
        max_tokens: 150,
      });

      const reply =
        response.choices[0].message?.content.trim() ||
        'No witty reply this time!';
      return { reply };
    } catch (error) {
      console.log(error);
    }
  }

  async npcAgent2(message: string) {
    const prompt = `your Agent a prompt`;

    try {
      const response = await this.openai.chat.completions.create({
        messages: [
          { role: 'system', content: `${prompt}` },
          { role: 'user', content: `${message}` },
        ],
        model: 'gpt-4o-mini',
        temperature: 0.5,
        frequency_penalty: 1.5,
        presence_penalty: 1.0,
        max_tokens: 150,
      });

      const reply =
        response.choices[0].message?.content.trim() ||
        'No witty reply this time!';
      return { reply };
    } catch (error) {
      console.log(error);
    }
  }

  async randomStartChat() {
    const prompt = ``;

    try {
      const response = await this.openai.chat.completions.create({
        messages: [
          { role: 'system', content: `${prompt}` },
          {
            role: 'user',
            content: 'Cna you randomly generate a message to start a chat',
          },
        ],
        model: 'gpt-4o-mini',
        temperature: 0.5,
        frequency_penalty: 1.5,
        presence_penalty: 1.0,
        max_tokens: 150,
      });

      const reply =
        response.choices[0].message?.content.trim() ||
        'No witty reply this time!';

      return { reply };
    } catch (error) {
      console.log(error);
    }
  }
}
