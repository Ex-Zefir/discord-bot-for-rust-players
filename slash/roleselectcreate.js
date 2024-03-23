const { EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js');
const fs = require('fs');
const config = require('../cfg/config.json');
const msgconfig = './cfg/msgid.json'

module.exports = {
  name: 'roleselectcreate',
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
      .setDescription(`${config.RolesDescription}`)
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
          .setCustomId("roleselector")
          .setPlaceholder("Выберите заинтересовавший Вас пункт меню")
          .setDisabled(state)
          .addOptions([{
            label: `Гость`,
            value: `role1`,
            description: `Гостевая роль`,
            emoji: `<a:hello:1101909612602609806>`
          },
          {
            label: `CS:GO`,
            value: `role2`,
            description: `Роль для игроков CS:GO`,
            emoji: `<:csgo:1143180488266231828>`
          },
          {
            label: `Apex Legends™`,
            value: `role3`,
            description: `Роль для игроков Apex Legends™`,
            emoji: `<:logo_apex:1143181230821625937>`
          },
          {
            label: `RUST`,
            value: `role4`,
            description: `Роль для игроков Rust.`,
            emoji: `<:rust:1143181758351818774>`
          }
          ])
      ),
    ];

    await interaction.deferReply(); interaction.deleteReply();
    const initialMessage = await interaction.channel.send({content: '**ЧТОБЫ ПОЛУЧИТЬ РОЛЬ, ВЫБИРАЙТЕ ЕЕ В МЕНЮ СНИЗУ**', embeds: [embed], components: components(false) });
    const rolemsgg = initialMessage.id
    console.log(`[/roleselectcreate]  ✅  создано сообщение для выбора ролей, его id: ${initialMessage.id}`)
    console.log(`[/roleselectcreate]  ✅  ПЕРЕЗАПУСТИТЕ БОТА!!!!!`)
    
    const configData = JSON.parse(fs.readFileSync(msgconfig));
    configData.MSG_selectroleId = rolemsgg;
    fs.writeFileSync(msgconfig, JSON.stringify(configData));
  }
}