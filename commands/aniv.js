exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setImage("https://i.pinimg.com/originals/78/65/e9/7865e9137e3aa105d0b32de417be30cb.gif")
    message.delete();
    message.channel.send("Bonne anniversaire à @Deafus#4831 et @Lawliet53#7778 même si c'est pas aujourd'hui car l'autre con d'admin sais plus si c'était aujourd'hui ou demain donc on préfère lui souhaiter aujourd'hui on leur ramène tous un gâteau et on leur fait tous des bisoux ").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}