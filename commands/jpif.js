exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setDescription(" Le lien de la chaîne: https://www.twitch.tv/narusnake")
    .setImage("https://i.pinimg.com/originals/77/5e/10/775e10e62bc3db584bbdadebee1b4c0d.png")
    message.delete();
    message.channel.send("@everyone Ce soir c'est le jeux au pif on débute le stream vers 20h30").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}