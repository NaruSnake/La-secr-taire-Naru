exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setDescription(" Le lien de la chaîne: https://www.twitch.tv/narusnake")
    .setImage("https://i.pinimg.com/originals/c3/40/6d/c3406da99afa0e42de8e44f381ef8705.png")
    message.delete();
    message.channel.send("@everyone Ce soir petit changement de programme pas de shantae mais du JDR sur Derniere Donne a 21h soyez la").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}