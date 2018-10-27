exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setDescription(" Le lien de la chaîne: https://www.twitch.tv/narusnake")
    .setImage("https://i.pinimg.com/originals/35/f7/4a/35f74aff55f7142ad09febc4fe41f93b.png")
    message.delete();
    message.channel.send("@everyone Retrouvez NaruSnake ce soir sur Super Mario Odyssey en let's play vers 20h30 - 21h").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}