exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setImage("https://i.pinimg.com/originals/cd/4e/b1/cd4eb18b90dddfe6f2a2125d4223030d.gif")
    message.delete();
    message.channel.send({embed}).catch(console.error);
    console.log
}