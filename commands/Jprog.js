exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setDescription(" Le lien de la chaîne: https://www.twitch.tv/narusnake")
    .setImage("https://i.pinimg.com/originals/82/c7/7c/82c77c89fccc98a2fc8b983ad0ac5fab.png")
    message.delete();
    message.channel.send("@everyone Voici le programme de la semaine en espérant qu'il vous plairat, des changement peuve etre amener notamment sur les jour de repos. Sans oublier que les JDR sont toujours la mais pas facile de les placé dans le programme donc resté conencté sur le discord je donne les infos au moment voulu. Des bisoux").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}