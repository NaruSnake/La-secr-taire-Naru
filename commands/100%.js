exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setDescription(" Le lien de la chaîne: https://www.twitch.tv/narusnake")
    .setImage("https://i.pinimg.com/originals/1b/5e/7e/1b5e7e0b42682453ce204db2e8ad9f37.png")
    message.delete();
    message.channel.send("@everyone Ce soir on chasse les succés du moins on essaye on débute le stream dans 1h à peut prêt").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}