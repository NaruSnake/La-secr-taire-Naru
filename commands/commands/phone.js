exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setImage("https://i.pinimg.com/originals/89/79/2c/89792c62419b8e333a3fe337edfbae26.gif")
    message.delete();
    message.channel.send({embed}).catch(console.error);
    console.log
}