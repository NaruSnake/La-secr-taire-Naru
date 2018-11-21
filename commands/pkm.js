exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setDescription(" Le lien de la chaîne: https://www.twitch.tv/narusnake")
    .setImage("https://i.pinimg.com/originals/1b/99/57/1b9957ef42c91b7163c664286e1f0eb1.png")
    message.delete();
    message.channel.send("@everyone Retrouvez NaruSnake ce soir sur Pokemon Let's Go Evoli en let's play et peut etre finir le pokedex de Pikachu vers 21h").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}