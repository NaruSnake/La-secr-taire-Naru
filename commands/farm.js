exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setDescription(" Le lien de la chaîne: https://www.twitch.tv/narusnake")
    .setImage("https://i.pinimg.com/originals/41/30/d0/4130d05abefe02bc46d3a44e8da02f19.png")
    message.delete();
    message.channel.send("@everyone Cette semaine un programme un peu particulier, semaine de farm sur divers jeu ca risque de se décider au dernier moment les jeux. Sans oublier que les JDR sont toujours la mais pas facile de les placé dans le programme donc resté connecté sur le discord je donne les infos au moment voulu. Des bisoux").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}