const { ActionRowBuilder, StringSelectMenuBuilder, Message } = require("discord.js");
const msgconfig = require("../../cfg/msgid.json");

const { CONRUSTBOTS3, 
        CONRUSTBOTS2, 
        CONRUSTBOTS, 
        RUSTBIND, 
        RUSTSITE, 
        CCTV ,
      } = require('../../cfg/ISMSG.js');

module.exports = async (client, interaction) => {
 // Проверяет, является ли взаимодействие слеш командой
    if (interaction.isCommand()) {

 // Получает команду из коллекции слеш команд
    const command = client.interactions.get(interaction.commandName);

// Если команда не существует, вернет сообщение об ошибке
    if (!command) return interaction.reply({
      content: "Что-то пошло не так | Возможно, команда не зарегистрирована?",
      ephemeral: true
    });

    command.run(client, interaction);
  }

//RUST HELP MENU - Начало
  if (interaction.customId === 'rusthelp-menu') {
    const rusthelpniga = interaction.values[0];

    if (rusthelpniga === "CCTV") {
       interaction.reply({ embeds: [CCTV], ephemeral: true}).catch((e) => { });
    } 
    if (rusthelpniga === "RUSTSITE") {
       interaction.reply({ embeds: [RUSTSITE], ephemeral: true}).catch((e) => { });
    } 
    if (rusthelpniga === "CONRUSTBOTS") {
      interaction.reply({ embeds: [CONRUSTBOTS, CONRUSTBOTS2, CONRUSTBOTS3], ephemeral: true}).catch((e) => { });
    }
    if (rusthelpniga === "RUSTBIND") {
      interaction.reply({ embeds: [RUSTBIND], ephemeral: true}).catch((e) => { });
   } 
  }
//RUST HELP MENU - Конец

//Список ролей - начало
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
  
if (interaction.customId === 'roleselector') {
  client.msgconfig = msgconfig;
  const selectedRole = interaction.values[0];

  if (selectedRole === 'role1') {
    const role = interaction.guild.roles.cache.get('1094652882726428782');
  
    if (role) {
      if (interaction.member.roles.cache.has(role.id)) {
        interaction.member.roles.remove(role);
        interaction.reply({ content: `Роль ${role} снята!`, ephemeral: true });
      } else {
        interaction.member.roles.add(role);
        interaction.reply({ content: `Роль ${role} выдана!`, ephemeral: true });
      }
    }
  }  else if (selectedRole === 'role2') {
      const role = interaction.guild.roles.cache.get('1132982886929289237');

      if (role) {
        if (interaction.member.roles.cache.has(role.id)) {
          interaction.member.roles.remove(role);
          interaction.reply({ content: `Роль ${role} снята!`, ephemeral: true });
        } else {
          interaction.member.roles.add(role);
          interaction.reply({ content: `Роль ${role} выдана!`, ephemeral: true });
        }
      }
    } else if (selectedRole === 'role3') {
      const role = interaction.guild.roles.cache.get('1140152439274733590');

      if (role) {
        if (interaction.member.roles.cache.has(role.id)) {
          interaction.member.roles.remove(role);
          interaction.reply({ content: `Роль ${role} снята!`, ephemeral: true });
        } else {
          interaction.member.roles.add(role);
          interaction.reply({ content: `Роль ${role} выдана!`, ephemeral: true });
        }
      }
    }else if (selectedRole === 'role4') {
    const role = interaction.guild.roles.cache.get('1036920877863944202');

    if (role) {
      if (interaction.member.roles.cache.has(role.id)) {
        interaction.member.roles.remove(role);
        interaction.reply({ content: `Роль ${role} снята!`, ephemeral: true });
      } else {
        interaction.member.roles.add(role);
        interaction.reply({ content: `Роль ${role} выдана!`, ephemeral: true });
      }
    }
  }
  if (msgconfig['MSG_selectroleId']) {
    const fetchedMessage = await interaction.channel.messages.fetch(msgconfig['MSG_selectroleId']);
    await interaction.channel.messages.edit(fetchedMessage.id, { components: components(false) });
  }
}
//Список ролей - Конец
}