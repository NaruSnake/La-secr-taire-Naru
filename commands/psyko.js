exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setImage("https://i.pinimg.com/originals/c1/c2/5a/c1c25aca53b10279c51afe44665c2984.gif")
    message.delete();
    message.channel.send({embed}).catch(console.error);
    console.log
}