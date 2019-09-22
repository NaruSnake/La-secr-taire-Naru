exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setDescription(" Le lien de la chaîne: https://www.twitch.tv/narusnake")
    .setImage("https://i.pinimg.com/originals/42/77/e8/4277e8fccaea4e0f6b29ef10f0689f6a.png")
    message.delete();
    message.channel.send("@everyone Ce soir on chasse les succés du moins on essaye on débute le stream dans 1h environ").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}