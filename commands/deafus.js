exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setImage("https://i.pinimg.com/originals/35/9b/bc/359bbcb2fd05ac4ec6e364baa6d4dec0.gif")
    message.delete();
    message.channel.send("@everyone Retrouvez ce soir Naru et Deafus pour faire des casse tête dans la non joie et la non bonne humeur sur portal 2 vers 21h").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}