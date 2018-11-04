exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setDescription(" Le lien de la chaîne: https://www.youtube.com/channel/UCoCIHOxDx_RG6y-rVk71oFA")
    .setImage("https://i.pinimg.com/originals/b6/2a/99/b62a993087458aed0f68eef6c1c38934.png")
    message.delete();
    message.channel.send("@everyone Ce soir vers 20h retrouvez le live du Retro StreamInk avec le Dr Link Ink sur Youtube et Twitch. \n Pendant ce live il fera gagner un petit lot à deux d'entre vous ! Soyez là :smiley:").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}