exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setImage("https://i.pinimg.com/originals/2d/6e/90/2d6e90fd8435b63eb98b0cf5caa3d729.gif")
    message.delete();
    message.channel.send({embed}).catch(console.error);
    console.log
}