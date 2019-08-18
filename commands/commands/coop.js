exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setDescription(" Le lien de la chaîne: https://www.twitch.tv/narusnake")
    .setImage("https://i.pinimg.com/originals/67/0f/c8/670fc857cd6a54d996df0ccba3fcf86c.png")
    message.delete();
    message.channel.send("@everyone Ce soir Deafus et Naru nous proposent une partie en coop, du rire au programme on commence dans 1h environ").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}