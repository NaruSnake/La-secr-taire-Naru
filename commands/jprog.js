exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setDescription(" Le lien de la chaîne: https://www.twitch.tv/narusnake")
    .setImage("https://i.pinimg.com/originals/0f/eb/5c/0feb5c90bc9e5dfe83d0c3f753f77238.png")
    message.delete();
    message.channel.send("@everyone Voici le programme de la semaine en espérant qu'il vous plaira, des changements peuvent être amener notamment sur les jour de repos. Sans oublier que les JDR sont toujours la mais pas facile de les placé dans le programme donc resté connecté sur le discord je donne les infos au moment voulu. Des bisoux").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}