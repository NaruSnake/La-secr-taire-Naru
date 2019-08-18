exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setDescription(" Le lien de la chaîne: https://www.twitch.tv/narusnake")
    .setImage("https://i.pinimg.com/originals/bf/bf/3d/bfbf3d15a91bd191e76a718479b09800.png")
    message.delete();
    message.channel.send("@everyone Ce soir on va faire du let's play en mode pépére on débute le stream vers 20h30").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}