exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setDescription(" Le lien de la chaîne: https://www.twitch.tv/narusnake")
    .setImage("https://i.pinimg.com/originals/3d/22/50/3d22507c335acfe25525928204bb17f2.png")
    message.delete();
    message.channel.send("@everyone Ce soir on va être sur du MMO, Tera, BDO ou FF14 voir autre chose vous le saurez en venant regarder on débute dans 1h environ").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}