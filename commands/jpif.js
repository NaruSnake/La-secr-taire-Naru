exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setDescription(" Le lien de la chaîne: https://www.twitch.tv/narusnake")
    .setImage("https://i.pinimg.com/originals/c4/e1/6d/c4e16d4dc6919390a81b5bc3fa6b7f00.png")
    message.delete();
    message.channel.send("@everyone Ce soir c'est le jeux au pif on débute le stream vers 20h30").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}