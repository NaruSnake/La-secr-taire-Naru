exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setImage("https://i.pinimg.com/originals/f8/ea/0b/f8ea0bec9e0003c68bcdfb633e789d61.png")
    message.delete();
    message.channel.send("Voici l'image de la chronologie faite pour le marathon").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}