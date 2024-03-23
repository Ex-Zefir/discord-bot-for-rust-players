const { EmbedBuilder } = require('discord.js');
const config = require('../../cfg/config.json');

module.exports = async (client, member) => {
    const channel = member.guild.channels.cache.get(config.welcomeChannelId);
    const avatar = member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 });
    if (!channel) return;

        const embed = new EmbedBuilder()
            .setDescription(`${member} присоединился к **${member.guild.name}**`)
            .setColor('#50ff65')
            .setThumbnail(avatar)
            .addFields(
              { name: 'Прочитай правила', value: `<#${config.RulesChannelId}>`, inline: true },
              { name: 'Получи роль', value: `<#${config.SelectRoleChannelId}>`, inline: true },
            )
    
        channel.send({ embeds: [embed] });
    
        member.roles.add(config.roleIds).catch(console.error);
  };