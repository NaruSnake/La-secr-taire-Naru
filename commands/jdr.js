exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setDescription(" Le lien de la chaîne: https://www.twitch.tv/narusnake")
    .setImage("https://i.pinimg.com/originals/dc/77/57/dc77571c68df211fb9cadbda7bcf1fe3.png")
    message.delete();
    message.channel.send("@everyone on se retrouve pour du JDR dans environs 1h soyez la").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}