exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setDescription(" Le lien de la chaîne: https://www.twitch.tv/narusnake")
    .setImage("https://i.pinimg.com/originals/0d/91/73/0d91736cc1abbd562c917de555e09f25.png")
    message.delete();
    message.channel.send("@everyone Ce soir on découvre Kill la Kill sur ps4 et on fini sur du Dragon Quest Builders 2").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}