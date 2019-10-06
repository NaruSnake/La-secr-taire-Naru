exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setDescription(" Le lien de la chaîne: https://www.twitch.tv/narusnake")
    .setImage("https://i.pinimg.com/originals/b9/84/b2/b984b273d37148e2767c28a349767275.png")
    message.delete();
    message.channel.send("@everyone Ce soir on va faire du let's play en mode pépère on débute le stream dans 1h environ").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}