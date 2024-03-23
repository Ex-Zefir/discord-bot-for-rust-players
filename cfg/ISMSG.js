const { EmbedBuilder  } = require("discord.js");

// RUST HELP MENU - НАЧАЛО 
        const CCTV = new EmbedBuilder()
          .setTitle("КОДЫ КАМЕР НА RT")
          .setColor('#ce3d3d')
          .setThumbnail('https://i.imgur.com/6GkZ17S.png')
          .addFields(
            { name: 'АЭРОПОРТ', value: '**```\nAIRFIELDHELIPAD\n```**', inline: true },
            { name: 'ЛАГЕРЬ БАНДИТОВ', value: '**```\nCASINO\nTOWNWEAPONS\n```**', inline: true },
            { name: 'СФЕРА', value: '**```\nDOME1\nDOMETOPS\n```**', inline: true },
            { name: 'БОЛЬШАЯ НЕФТЯНКА', value: '**```\nOILRIG2HELI\nOILRIG2DOCK\nOILRIG2EXHAUST\nOILRIG2L1\nOILRIG2L2\nOILRIG2L3A\nOILRIG2L3B\nOILRIG2L4\nOILRIG2L5\nOILRIG2L6A\nOILRIG2L6B\nOILRIG2L6C\nOILRIG2L6D\n```**', inline: true },
            { name: 'ПОДВОДНАЯ ЛАБА', value: '**```\nAUXPOWER----\nBRIG----\nCANTINA----\nCAPTAINQUARTER----\nCLASSIFIED----\nCREWQUARTERS----\nHALLWAY----\nINFIRMARY----\nLAB----\nLOCKERROOM----\nOPERATIONS----\nSECURITYHALL----\nTECHCABINET----\n```**', inline: true },
            { name: 'МАЛЕНЬЯКАЯ НЕФТЯНКА', value: '**```\nOILRIG1HELI\nOILRIG1DOCK\nOILRIG1EXHAUST\nOILRIG1L1\nOILRIG1L2\nOILRIG1L3\nOILRIG1L4\n```**' },
            { name: 'ГОРОД NPC', value: '**```\nCOMPOUNDSTREET\nCOMPOUNDMUSIC\nCOMPOUNDCRUDE\nCOMPOUNDCHILL\n```**', inline: true },
            { name: 'РАКЕТНАЯ ШАХТА', value: '**```\nSILOTOWER\nSILOEXIT1\nSILOEXIT2\nSILOSHIPPING\nSILOMISSILE\n```**', inline: true },
          )
          .setTimestamp()
          .setFooter({
            text: `Обновлено`,
            timestamp: `2023-06-20T07:30:00.000Z`,
            iconURL: `https://steamuserimages-a.akamaihd.net/ugc/2011449885581581785/B897FDA63713A12E265862FDC53918991F2E3E6A/?imw=512&amp;imh=512&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true`
          });
    
    
        const RUSTSITE = new EmbedBuilder()
          .setTitle("ПОЛЕЗНЫЕ САЙТЫ ПО RUST")
          .setColor('#ce3d3d')
          .setDescription("***1) https://rustraidcalculator.com/*** `-` `Калькулятор рейдера`\n***2) https://www.rustrician.io/*** `-` `Сайт с электрическими схемами`\n***3) https://www.battlemetrics.com/*** `-` `Сайт со статистикой серверов`\n***4) https://rustmaps.com/*** `-` `Сайт с картами и информацией о них`\n***5) https://www.rustbreeder.com/*** `-` `Сайт для вывода генов растений`\n***6) https://rustlabs.com/*** `-` `Сайт с полезной информацией о всех предметах`\n***7) https://rusttips.com/*** `-` `Сайт с рейд калькулятором и тренировкой аима`\n***8) https://rust.facepunch.com/*** `-` `Официальный сайт Rust`\n***9) https://t.me/rust_bugs/*** `-` `Телеграмм Woodcock'a с багами`")
          .setTimestamp()
          .setFooter({
            text: `Обновлено`,
            timestamp: `2023-06-20T07:30:00.000Z`,
            iconURL: `https://steamuserimages-a.akamaihd.net/ugc/2011449885581581785/B897FDA63713A12E265862FDC53918991F2E3E6A/?imw=512&amp;imh=512&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true`
          });
    
    
        const RUSTBIND = new EmbedBuilder()
        .setColor('#ce3d3d')
        .addFields(
          {name: 'БИНД НА FOV 70 В ПРИЦЕЛЕ', value: '**```bind mouse1 +attack2;+fov 90;fov 70;```**'},
          {name: 'КОМБАТ ЛОГ НА F1', value: '**```bind f1 consoletoggle;combatlog```**'},
          {name: 'УПРАВЛЕНИЕ РУКАМИ ПЕРСОНАЖА', value: '**```graphics.vm_fov_scale false - отдалить\ngraphics.vm_fov_scale true - приблизить```**'},
          {name: 'БИНД НА ПРОСВЕТ ВОДЫ', value: '**```bind 8 water.quality -1\nbind 9 water.quality 2```**'},
          {name: 'БИНД НА АВТОБЕГ', value: '**```bind o forward;sprint```**'},
          {name: 'БИНД НА АВТОАТАКУ (СТОЯ/СИДЯ)', value: '**```\nbind i attack\nbind i attack;duck\n```**'},
          {name: 'БИНД НА ДИСКОННЕКТ', value: '**```\nbind p disconnect\n```**'},
        )
        .setTimestamp()
        .setFooter({
          text: `Обновлено`,
          timestamp: `2023-06-20T07:30:00.000Z`,
          iconURL: `https://steamuserimages-a.akamaihd.net/ugc/2011449885581581785/B897FDA63713A12E265862FDC53918991F2E3E6A/?imw=512&amp;imh=512&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true`
        });
    
        const CONRUSTBOTS = new EmbedBuilder()
          .setTitle("КАК ПРИВЯЗАТЬ СВОЙ АККАУНТ RUST К БОТУ")
          .setColor('#ce3d3d')
          .setDescription("**```\n1) Скачать программу rustPlusPlus-1.1.0 (Прикреплена ниже)\n2) Установить и запустить программу.\n3) Нажать на кнопку \"Connect with Rust+\"\n4) Войти в свой аккаунт стим через программу!\n   ВАЖНО: НЕ ВВОДИТЕ СВОИ ПАРОЛИ!!!!! Используйте QR-код! \n5) Нажать на кнопку \"Copy\"\n6) Перейти в Discord и найти ниже канал \"команды\"\n7) Нажать на поле ввода текста и нажать Сtrl+V а потом Enter\n8) Вот и все вы привязали свой аккаунт к боту\n```**")
          .setTimestamp()
          .setFooter({
            text: `Обновлено`,
            timestamp: `2023-06-20T07:30:00.000Z`,
            iconURL: `https://steamuserimages-a.akamaihd.net/ugc/2011449885581581785/B897FDA63713A12E265862FDC53918991F2E3E6A/?imw=512&amp;imh=512&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true`
          });
    
        const CONRUSTBOTS2 = new EmbedBuilder()
            .setTitle("СКАЧАТЬ ПРОГРАММУ ДЛЯ АВТОРИЗАЦИИ")
            .setColor('#ce3d3d')
            .setDescription("**[rustPlusPlus-1.1.0-win-x64.exe - Нажми для скачивания](https://github.com/alexemanuelol/rustPlusPlus-Credential-Application/releases/download/v1.1.0/rustPlusPlus-1.1.0-win-x64.exe)**")
            .setTimestamp()
            .setFooter({
              text: `Обновлено`,
             timestamp: `2023-06-20T07:30:00.000Z`,
              iconURL: `https://steamuserimages-a.akamaihd.net/ugc/2011449885581581785/B897FDA63713A12E265862FDC53918991F2E3E6A/?imw=512&amp;imh=512&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true`
          });
    
        const CONRUSTBOTS3 = new EmbedBuilder()
          .setTitle("КАК ПРИВЯЗАТЬ СВОЙ ФАРМБОТ К ДИСКОРДУ")
          .setColor('#ce3d3d')
          .setDescription("**```\n1) Попросить у ɀ𝖊𝖋𝖏𝔯'a WebHook\n2) Зайти в бота, поставить галочку на \"Turn on notification\" \n3) В Webhook URL указать ссылку которую дал ɀ𝖊𝖋𝖏𝔯.\n4) Сохранить настройки можно нажав на кнопку «Apply changes»\n5) Уведомления подвязаны, далее все по инструкции бота.\n```**")
          .setTimestamp()
          .setFooter({
            text: `Обновлено`,
            timestamp: `2023-06-20T07:30:00.000Z`,
            iconURL: `https://steamuserimages-a.akamaihd.net/ugc/2011449885581581785/B897FDA63713A12E265862FDC53918991F2E3E6A/?imw=512&amp;imh=512&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true`
          });
// RUST HELP MENU - Конец

//Экспортируем наши сообщения
module.exports = {
  CCTV,
  RUSTSITE,
  RUSTBIND,
  CONRUSTBOTS,
  CONRUSTBOTS2,
  CONRUSTBOTS3,
};
    