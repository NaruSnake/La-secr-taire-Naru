exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setImage("https://i.pinimg.com/originals/38/f0/23/38f023dde7c6e9fb25d985de9a80d5b6.gif")
    message.delete();
    message.channel.send({embed}).catch(console.error);
    console.log
}