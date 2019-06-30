exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setDescription(" Le lien de la chaîne: https://www.twitch.tv/narusnake")
    .setImage("https://i.pinimg.com/originals/77/da/38/77da38040b93059592cc90a05fae2184.png")
    message.delete();
    message.channel.send("@everyone Ce soir on chasse les succés du moins on essaye on débute le stream vers 20h30").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}