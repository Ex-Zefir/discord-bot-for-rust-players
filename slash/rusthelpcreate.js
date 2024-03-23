const { EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js');
const config = require('../cfg/config.json');

module.exports = {
  name: 'rusthelpcreate',
  description: '📜 Создать меню с полезными командами для RUST!',
  run: async (client, interaction) => {

    const OwnerRole = interaction.guild.roles.cache.find(role => role.id === config.OwnerRole);

    if (!interaction.member.roles.cache.has(OwnerRole.id)) {
      return interaction.reply({
        content: '⛔ У вас нет прав для использования этой команды!',
        ephemeral: true,
      });
    }

    const embed = new EmbedBuilder()
      .setTitle(`МЕНЮ ПОЛЕЗНОЙ ИНФОРМАЦИИ ПО ИГРЕ RUST`)
      .setColor('#ce3d3d')
      .setDescription('> **Здесь Вас ожидает много полезной информации:**\n\n* Полезные сайты по RUST\n* Полезные бинды для RUST\n* Инфа для привязки к ботам\n* Коды всех доступных на RT камер\n  * И много другой полезной информации\n\n > ***Нажми на меню снизу чтобы посмотреть.***')
      .addFields()
      .setTimestamp()
      .setFooter({
        text: `Обновлено`,
        timestamp: `2023-06-20T07:30:00.000Z`,
        iconURL: client.user.displayAvatarURL()
      });

    const components = (state) => [
      new ActionRowBuilder().addComponents(
        new StringSelectMenuBuilder()
          .setCustomId("rusthelp-menu")
          .setPlaceholder("Выберите заинтересовавший Вас пункт меню")
          .setDisabled(state)
          .addOptions([{
            label: `CCTV - Коды камер`,
            value: `CCTV`,
            description: `Коды всех доступных камер на RT!`,
            emoji: `🎦`
          },
          {
            label: `Полезные сайты по RUST`,
            value: `RUSTSITE`,
            description: `Список сайтов с полезной информацией`,
            emoji: `🔗`
          },
          {
            label: `Полезные бинды для RUST`,
            value: `RUSTBIND`,
            description: `Список полезных биндов`,
            emoji: `🛅`
          },
          {
            label: `Инфа для привязки к ботам`,
            value: `CONRUSTBOTS`,
            description: `Инфа о привязке ботов к серверу`,
            emoji: `🤖`
          }
          ])
      ),
    ];

    const initialMessage = await interaction.deferReply(); interaction.deleteReply(); interaction.channel.send({ embeds: [embed], components: components(false) });
  }
}