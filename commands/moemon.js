exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setImage("https://i.pinimg.com/originals/a3/26/8b/a3268b939fff646d0f7441f6af7974b6.png")
    message.delete();
    message.channel.send("@everyone Retrouvez NaruSnake pour faire du Moemon Fire Red Random, le random à été faite par le DrLinkInk & co ce soir à 14h").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}