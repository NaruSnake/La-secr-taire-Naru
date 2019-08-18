exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setDescription(" Le lien de la chaîne: https://www.twitch.tv/narusnake")
    .setImage("https://i.pinimg.com/originals/fc/a7/58/fca758591c52dfa7bed6c351020abe72.png")
    message.delete();
    message.channel.send("@everyone Ce soir Naru nous propose un jeu qu'il a choisi au hasard on commence dans 1h environ").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}