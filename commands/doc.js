exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setDescription(" Le lien de la chaîne: https://www.youtube.com/channel/UCoCIHOxDx_RG6y-rVk71oFA")
    .setImage("https://i.pinimg.com/originals/3e/45/dd/3e45ddc4958284296390a8bd02d1ec12.jpg")
    message.delete();
    message.channel.send("@everyone Ce soir vers 20h retrouvez le live du Retro StreamInk avec le Dr Link Ink sur Youtube et Twitch.").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}