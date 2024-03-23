const register = require('../../utils/slashsync');
const { ActivityType } = require('discord.js');
const config = require('../../cfg/config.json');
const { startDiscordBot } = require('../../module/rustitemstore.js');
const rustChannelId = (config.rustChannelId)

module.exports = async (client) => {
  await register(client, client.register_arr.map((command) => ({
    name: command.name,
    description: command.description,
    options: command.options,
    type: '1'
  })), {
    debug: true
  });
  // Register slash commands - ( If you are one of those people who read the codes I highly suggest ignoring this because I am very bad at what I am doing, thanks LMAO )
  console.log(`[ / | Слеш команды ] - ✅ Загружены все  слеш команды!`)
  console.log(`[СТАТУС] ${client.user.tag} авторизовался, бот в онлайне!`);
  client.user.setPresence({ activities: [{name: config['sitename'], type: ActivityType.Watching}], status: 'online'});
  client.user.setUsername(config['botname']);
  startDiscordBot(client, rustChannelId);
};
