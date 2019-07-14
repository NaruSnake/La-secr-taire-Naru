exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setDescription(" Le lien de la chaîne: https://www.twitch.tv/narusnake")
    .setImage("https://i.pinimg.com/originals/4a/77/17/4a77171d74ec87199022550d3f72546f.png")
    message.delete();
    message.channel.send("@everyone Ce soir on chasse les insectes avec Deafus et Naru en Coop").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}