exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setDescription(" Le lien de la chaîne: https://www.twitch.tv/narusnake")
    .setImage("https://i.pinimg.com/originals/25/8f/23/258f2342ba53bf79e1d5e7790fe0f9fd.png")
    message.delete();
    message.channel.send("@everyone Ce soir c'est jour de Repos on vous donne rendez-vous demain pour de nouvelle aventure").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}