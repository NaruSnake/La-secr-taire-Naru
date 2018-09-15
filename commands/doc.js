exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setDescription(" Le lien de la chaîne: https://www.youtube.com/channel/UCoCIHOxDx_RG6y-rVk71oFA")
    .setImage("https://i.pinimg.com/originals/29/d8/3b/29d83b44a7f91673db40a70d49e31195.jpg")
    message.delete();
    message.channel.send("@everyone Ce soir vers 20h retrouvez le RetroStreamInk du Dr Link Ink sur Youtube et Twitch !").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}