const { EmbedBuilder } = require('discord.js');
const axios = require('axios');
const fs = require('fs');
const rustitemPath = __dirname + '/data/old_shop.txt';

function startDiscordBot(client, rustChannelId) {
    setInterval(() => getScmmShop(client, rustChannelId), 900000);
    console.log(`[RUST ITEMS]  ✅  отслеживание Item Store активно!`);
}

function checkOldShopFile(rustitemPath, newShopId) {
    if (!fs.existsSync(rustitemPath)) {
        fs.writeFileSync(rustitemPath, `${newShopId}`, handleError('Не удалось создать файл старого магазина.'));
        return false;
    }
    return true;
}

function handleError(message) {
    return (err) => {
        if (err) throw Error(`❌ ${message}`);
        else console.log('Магазин предметов Rust', '✅ Успешно обновлен старый файл магазина.');
    };
}

function postAndWriteFile(channel, newShopId, newShopImage) {
    let now = new Date();
    const iti = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('ru-RU', iti);
    
    const embed = new EmbedBuilder()
        .setTitle(`Обновление скинов в Item Store`)
        .setURL(`https://store.steampowered.com/itemstore/252490/browse/?filter=All`)
        .setColor('#ce3d3d')
        .setImage(newShopImage);

    channel.send({ embeds: [embed] });

    fs.writeFileSync(rustitemPath, `${newShopId}`, handleError('Failed to update old shop file.'));
}

function getScmmShop(client, rustChannelId) {
    console.log('Магазин предметов Rust', '✅ Извлечение данных магазина предметов.');
    axios.get('https://rust.scmm.app/api/store/current')
        .then(response => {
            const newShopId = response.data.id;
            const newShopImage = response.data.itemsThumbnailUrl;

            let oldShopExist = checkOldShopFile(rustitemPath, newShopId);

            if ((!oldShopExist) || (oldShopExist && fs.readFileSync(rustitemPath, 'utf8') != newShopId)) {
                postAndWriteFile(client.channels.cache.get(rustChannelId), newShopId, newShopImage);
            }
        })
        .catch(error => {
            console.error('Магазин предметов Rust', '❌ Не удалось получить данные магазина предметов.\n', error);
        });
}

module.exports = { startDiscordBot };