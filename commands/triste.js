exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setImage("https://i.pinimg.com/originals/a1/d3/c0/a1d3c069b431449f22b4ebd1d0a8a1b1.gif")
    message.delete();
    message.channel.send("Le patron a mal à son petit coeur, dois-je lui passé un message ?").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}