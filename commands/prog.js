exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setDescription(" Le lien de la chaîne: https://www.twitch.tv/narusnake")
    .setImage("https://i.pinimg.com/originals/8b/86/c0/8b86c0a9b26ea42f86838974b22e64d6.png")
    message.delete();
    message.channel.send("@everyone Voici ce qu'il y a au programme en ce moment, des annonces seront faites tous les jours pour vous informer de ce que l'on va faire 1h avant le stream à peu près. Je posterais ce message à chaque changement dans le programme. Soyez-là pour ne rien louper.").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}