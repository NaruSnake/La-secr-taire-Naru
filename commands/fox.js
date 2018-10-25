exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setImage("https://i.pinimg.com/originals/d0/65/4c/d0654cdb202a10791a5f3d66a71a79b7.jpg")
    message.delete();
    message.channel.send("tu sais j'ai d'autre costume por halloween").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}