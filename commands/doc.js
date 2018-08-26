exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setImage("https://i.pinimg.com/originals/7e/cc/8f/7ecc8f9f11e8413472e43b09bc305151.png")
    message.delete();
    message.channel.send("@everyone Ce soir vers 20h retrouvez le RetroStreamInk du Dr Link Ink sur Youtube et Twitch !").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}