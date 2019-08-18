exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setDescription(" Le lien de la chaîne: https://www.twitch.tv/narusnake")
    .setImage("https://i.pinimg.com/originals/07/d1/a2/07d1a207a43b4dbe7ef85d59db40777f.png")
    message.delete();
    message.channel.send("@everyone Cette semaine vacance, pas de stream sauf peut-etre du JDR. Des zoubi").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}