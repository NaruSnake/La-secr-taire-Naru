exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setImage("https://i.pinimg.com/originals/9d/4d/b8/9d4db82e44498c4e9be097a035ca2bfd.gif")
    message.delete();
    message.channel.send({embed}).catch(console.error);
    console.log
}