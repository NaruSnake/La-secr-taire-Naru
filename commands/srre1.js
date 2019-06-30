exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setDescription(" Le lien de la chaîne: https://www.twitch.tv/teraeurope")
    .setImage("https://i.pinimg.com/originals/9f/2b/3b/9f2b3bcccead8aade83dabd2669f99c7.png")
    message.delete();
    message.channel.send("@everyone TeraEurope lance un stream sur les nouveautés de la nouvelle mise à jour si ça vous interesse c'est ici que ça ce passe https://www.twitch.tv/teraeurope").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}