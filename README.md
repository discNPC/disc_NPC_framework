DISCORD_NPC FRAMEWORK

A NestJS application that allows you to configure and set up two AI-powered agents capable of interacting with each other in a dedicated Discord channel. These bots use OpenAI’s API for intelligent responses, enabling engaging and dynamic conversations in real-time.

📋 Features
• Two Configurable AI Bots: Define bot personalities and behavior through environment variables.
• Discord Integration: Bots communicate within a specific Discord channel.
• Customizable Settings: Adjust response times and channels effortlessly.
• OpenAI-Powered Intelligence: Bots are backed by OpenAI’s conversational AI capabilities.

🚀 Getting Started

Follow the steps below to set up and run the application.

Prerequisites
• Node.js (v16 or later)
• NestJS CLI
• A Discord Account with access to manage bots
• An OpenAI API Key

🔑 Environment Variables

Create a .env file in the root directory and configure it as shown below:

DISCORD_TOKEN1= # Bot 1's Discord token
DISCORD_TOKEN2= # Bot 2's Discord token
OPENAI_API_KEY= # OpenAI API key for generating bot responses
BOT1_USERNAME= # Username for Bot 1
BOT2_USERNAME= # Username for Bot 2
BOT_CHANNEL_ID= # ID of the Discord channel where the bots will chat
CHAT_RESPONSE_TIME=1000 # Response delay in milliseconds

Alternatively, use the provided .env.example as a reference.

🛠️ How to Run the Code 1. Clone the Repository

git clone <repository-url>
cd <repository-directory>

    2.	Install Dependencies

pnpm install

    3.	Set Environment Variables

Configure the .env file based on the template provided. 4. Run the Application

pnpm run start:dev

This starts the NestJS application and logs the bots into Discord.

🎮 Setting Up Discord Bots 1. Create Discord Applications for the Bots
• Go to the Discord Developer Portal.
• Click New Application to create two separate applications for each bot.
• Note the Bot Token for each application under the “Bot” section. 2. Configure Bot Permissions
• Under the “OAuth2” tab, go to the URL Generator section.
• Check the following scopes: bot, applications.commands.
• Under “Bot Permissions,” select the necessary permissions, such as:
• Send Messages
• Read Message History
• Copy the generated URL and use it to invite each bot to your server. 3. Add Bots to the Target Discord Channel
• Assign the bots to the desired channel.
• Ensure the bots have sufficient permissions in the channel to read and send messages.

🧩 Key Code Components

Bot Initialization (Example from Discordbot1Service)

The bot logs in using the specified DISCORD_TOKEN1 and listens for incoming messages:

this.client = new Client({
intents: ['Guilds', 'GuildMessages', 'DirectMessages', 'MessageContent'],
});
this.client.login(token);
this.client.once('ready', this.onReady);
this.client.on('messageCreate', this.handleRecievedMessages);

AI-Driven Responses

When a bot receives a message, it uses the NpcAgentService to generate a reply:

const npcAgent1 = await this.agentService.npcAgent1(
`${message.content.trim()}`,
);
if (npcAgent1.reply) {
const channel = this.client.channels.cache.get(
`process.env.BOT_CHANNEL_ID`,
);
if (channel?.isTextBased()) {
setTimeout(async () => {
return await (<TextChannel>channel).send(`${npcAgent1.reply}`);
}, Number(process.env.CHAT_RESPONSE_TIME) || 1000);
}
}

🛡️ Notes on Security
• Keep your .env file private. Do not expose sensitive data like bot tokens and API keys.
• Use a secure storage system like AWS Secrets Manager or environment variable tools in production.

🤝 Contributing

Contributions are welcome! Please follow the steps below: 1. Fork the repository. 2. Create a feature branch (git checkout -b feature/your-feature-name). 3. Commit your changes (git commit -m 'Add feature details'). 4. Push to the branch (git push origin feature/your-feature-name). 5. Open a pull request.

📜 License

This project is licensed under the MIT License. See the LICENSE file for details.

💬 Questions or Feedback?

Feel free to raise an issue on the repository or contact us directly for assistance.
