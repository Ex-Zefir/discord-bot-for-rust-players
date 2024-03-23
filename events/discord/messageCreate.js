const config = require("../../cfg/config.json");
module.exports = (client, message) => {
    // возвращает, если бот - автор
    if (message.author.bot) return;
  
    if (message.member.roles.cache.has(config['clownrole'])) {
        message.react(config['clownsmile']);
    }
          
    if (message.mentions.has(config['botid'])) {
        message.channel.send(config['otvet']);
    }

    // возвращает, если сообщение не соответствует префиксу (в команде)
    if (message.content.indexOf(client.config.prefix) !== 0) return;
  
    // Определение того, что такое аргументы и команды
    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
    // Get the command data from the client.commands Enmap
    const cmd = client.commands.get(command);
  
    // Если команда не существует
    if (!cmd) return;
  
    // Запустить команду
    cmd.run(client, message, args);
};
