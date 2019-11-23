exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setDescription(" Le lien de la chaîne: https://www.twitch.tv/narusnake")
    .setImage("https://i.pinimg.com/originals/f8/ea/0b/f8ea0bec9e0003c68bcdfb633e789d61.png")
    message.delete();
    message.channel.send("Qu'est-que c'est que The Legend of Zelda Chronicles ?  C'est simple c'est un marathon zelda ou on fera tout les jeux vidéo Zelda y compris les non officiels CDI ou les petits spin off comme navi trackers ect... Le tout dans l’ordre chronologique que Naru à pensé logique , avec une petite touche d'humour et de rôle play.").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}