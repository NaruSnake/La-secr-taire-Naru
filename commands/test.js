exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setImage("")
    message.delete();
    message.channel.send("@everyone").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}