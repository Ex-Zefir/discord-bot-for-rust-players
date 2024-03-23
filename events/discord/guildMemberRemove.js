const { EmbedBuilder } = require('discord.js');
const config = require('../../cfg/config.json');

module.exports = async (client, member) => {
const channel = member.guild.channels.cache.get(config.welcomeChannelId);
    if (!channel) return;
        const embed = new EmbedBuilder()
            .setDescription(`${member} покинул **${member.guild.name}**`)
            .setColor('#ce3d3d')
        channel.send({ embeds: [embed] });
};