exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setDescription(" Le lien de la chaîne: https://www.twitch.tv/speedthemall")
    .setImage("https://pbs.twimg.com/media/Cge_tmrWEAA5g2U.jpg")
    message.delete();
    message.channel.send("@everyone Retrouvez Astreachan & NaruSnake pour une race de Sonic World dans la catégorie Marathon mode Random Characters pour le mini Marathon de SpeedThemAll vers 22h").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}