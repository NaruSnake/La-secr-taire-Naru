exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setDescription(" Le lien de la chaîne: https://www.twitch.tv/narusnake")
    .setImage("https://i.pinimg.com/originals/ae/1d/f7/ae1df70967d535489d51e9f75fc53c58.png")
    message.delete();
    message.channel.send("@everyone Ce soir c'est le jeux au pif on débute le stream vers 20h30").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}