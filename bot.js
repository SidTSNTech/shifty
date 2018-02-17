const { Client } = require('discord.js');
const bot = new Client();
const cfg = require('./config.json');
bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag} (${bot.user.id}) on ${bot.guilds.size} servers.`);
  bot.user.setPresence({ game: { name: `on ${bot.guilds.size} servers.`, type: 0 } });
});

bot.on('message', msg => {
  if (msg.author.bot || !msg.content.startsWith(cfg.prefix)) return;
  const args = msg.content.slice(cfg.prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  if (command === 'online?') {
    msg.reply('Possibly.');
  }
  console.log(`Args: ${args}\nCommand: ${command}`);
});

// IF YOU CHANGE THIS THEN THE BOT WONT WORK UNLESS YOU ARE SELF-HOSTING THE BOT
bot.login(process.env.BOT_TOKEN);
