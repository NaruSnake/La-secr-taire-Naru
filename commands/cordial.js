exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setDescription(" Cordialement, La Direction")
    .setImage("https://media.giphy.com/media/3GBKbN6mznzRb22qcC/giphy.gif")
    message.delete();
    message.channel.send({embed}).catch(console.error);
    console.log
}