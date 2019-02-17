exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setDescription(" Le lien de la chaîne: https://www.youtube.com/channel/UCoCIHOxDx_RG6y-rVk71oFA")
    .setImage("https://i.pinimg.com/originals/3d/f8/31/3df8316f4a14017239e494189032edcc.jpg")
    message.delete();
    message.channel.send("@everyone Ce soir vers 20h retrouvez le live du Retro StreamInk avec le Dr Link Ink sur Youtube et Twitch.").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}