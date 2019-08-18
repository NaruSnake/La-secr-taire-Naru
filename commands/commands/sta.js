exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setDescription(" Le lien de la chaîne: https://www.twitch.tv/speedthemall")
    .setImage("https://i.pinimg.com/originals/f5/33/77/f53377a53067f29fd9c741a613fa9d12.png")
    message.delete();
    message.channel.send("@everyone Retrouvez Naru pour un Speedrun pour le mini Marathon de SpeedThemAll ").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}