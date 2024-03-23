const fetch = require('node-fetch');
const { EmbedBuilder, ApplicationCommandOptionType } = require('discord.js');
const { getSteamID } = require('../utils/steamid.js');
const config = require('../cfg/config.json');

module.exports = {
    name: 'stats',
    description: '📈 Получить статистику игрока RUST по ссылке на профиль!',
    options: [
        {
            name: 'url_steam',
            description: 'Cсылка на STEAM аккаунт игрока',
            type: ApplicationCommandOptionType.String,
            required: true
        }
    ],

    run: async (client, interaction) => {
        const link = interaction.options.getString('url_steam');
        const steamKey = config.steamApiKey;
      
          const steamId = await getSteamID(link, steamKey);
      
          if (!steamId) {
            await interaction.reply({ content: `⚠️ Не удалось получить Steam ID. Проверьте ссылку.`, ephemeral: true }); // Отправляем сообщение в чат, если не получилось получить Steam ID
            return;
          }
      
          const url = `https://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v2/?appid=252490&key=${steamKey}&steamid=${steamId}`;
          const response = await fetch(url);
          const rustdata = await response.json();
      
          const profileUrl = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${steamKey}&steamids=${steamId}`;
          const profileResponse = await fetch(profileUrl);
          const profileData = await profileResponse.json();
      
          if (!profileData.response || profileData.response.players.length === 0) {
           await interaction.reply({ content: `⚠️ Не удалось найти профиль игрока.`, ephemeral: true });
            return;
          }
      
          const player = profileData.response.players[0];
          const playerName = player.personaname;
          const avatarUrl = player.avatarfull;
      
          if (rustdata.playerstats) {
            const stats = {
              headshot: rustdata.playerstats.stats.find((stat) => stat.name === "headshot").value,
              kills: rustdata.playerstats.stats.find((stat) => stat.name === "kill_player").value,
              deaths: rustdata.playerstats.stats.find((stat) => stat.name === "deaths").value,
              death_suicide: rustdata.playerstats.stats.find((stat) => stat.name === "death_suicide").value,

              blueprint_studied: rustdata.playerstats.stats.find((stat) => stat.name === "blueprint_studied").value,
              wounded_assisted: rustdata.playerstats.stats.find((stat) => stat.name === "wounded_assisted").value,

              bullet_hit_player: rustdata.playerstats.stats.find((stat) => stat.name === "bullet_hit_player").value,
              arrow_hit_player: rustdata.playerstats.stats.find((stat) => stat.name === "arrow_hit_player").value,  
              bullet_fired: rustdata.playerstats.stats.find((stat) => stat.name === "bullet_fired").value,
              arrow_fired: rustdata.playerstats.stats.find((stat) => stat.name === "arrow_fired").value,
            };

            var kd =  stats.kills / stats.deaths;
            kd = kd.toPrecision(3)
            var hitpf = 100 * stats.bullet_hit_player / stats.bullet_fired;
            hitpf = hitpf.toPrecision(2)
            var hitpa = 100 * stats.arrow_hit_player / stats.arrow_fired;
            hitpa = hitpa.toPrecision(2)
      
            const messageEmbed = new EmbedBuilder()
              .setColor("#ce3d3d")
              .setTitle(`Cтатистика RUST игрока ${playerName}`)
              .setURL(link)
              .setThumbnail(avatarUrl)
              .addFields(
                {
                  name: " ",
                  value: `> 💪🏻\`К/Д\`: ${kd} \n> 🤯\`Хэдшоты\`: ${stats.headshot}\n> 🔫\`Точность оружия\`: ${hitpf}%\n> 🏹\`Точность лука\`: ${hitpa}%`,
                  inline: true
                },
                {
                  name: " ",
                  value: `> ☠️\`Смертей\`: ${stats.deaths}\n> 💀\`Убийств\`: ${stats.kills}\n> 🆙\`Поднял игроков\`: ${stats.wounded_assisted}\n> 📜\`Изучено чертежей\`: ${stats.blueprint_studied}`, 
                  inline: true 
                }
                )
      
            await interaction.reply({ embeds: [messageEmbed], ephemeral: true });
          } else {
            await interaction.reply({ content: `⚠️ Похоже что у игрока закрыт профиль, либо отсутствует игра на аккаунте!`, ephemeral: true }); // Отправляем сообщение в чат, если не удалось получить статистику
          }
        }
};