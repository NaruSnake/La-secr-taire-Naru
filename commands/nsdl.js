exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setDescription(" Le lien de la chaîne de NaruSnake: https://www.twitch.tv/narusnake \n Le lien de la chaîne de DrLinkInk&Cie: https://www.youtube.com/channel/UCoCIHOxDx_RG6y-rVk71oFA")
    .setImage("https://i.pinimg.com/originals/6f/b9/1c/6fb91cd14198f49c3ffd6b645a07d8e4.jpg")
    message.delete();
    message.channel.send("@everyone Retrouvez ce soir AdryNeko, KitsuneMiu, Roy must'hang, NaruSnake, DrLinkInk pour un stream spécial Halloween sur Dead By Daylight sur les chaînes Twitch et Youtube de DrLinkInk&Cie et NaruSnake comme ça vous aurez 2 vues différentes. Tenez vous prêt aux alentours de 21h pour le massacre.").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}