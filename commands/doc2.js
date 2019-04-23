exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setDescription(" Le lien de la chaîne: https://www.youtube.com/channel/UCoCIHOxDx_RG6y-rVk71oFA")
    .setImage("https://i.pinimg.com/originals/cd/f8/21/cdf8218ee8c0f15cd8ac2966fcd30fda.jpg")
    message.delete();
    message.channel.send("@everyone  Retrouvez le Docteur Link Ink aux alentours de 15h pour un live Youtube et Twitch sur une hack-rom Pokémon : Ruby Oméga : Glowin Garnet.").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}