exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setDescription(" Le lien de la chaîne: https://www.twitch.tv/narusnake")
    .setImage("https://i.pinimg.com/originals/00/d6/f8/00d6f8a73e8dcfd7fbc9bc69d9b7c0c3.png")
    message.delete();
    message.channel.send("@everyone Ce soir on continue l'aventure Final Fantasy VI avec Deafus et Naru en Coop").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}