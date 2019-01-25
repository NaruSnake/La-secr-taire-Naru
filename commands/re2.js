exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setDescription(" Le lien de la chaîne: https://www.twitch.tv/narusnake")
    .setImage("https://i.pinimg.com/originals/a1/33/f4/a133f4e099344e4452ac7d0adbe344f8.png")
    message.delete();
    message.channel.send("@everyone Retrouvez NaruSnake ce soir sur Resident Evil 2 vers 20h30 - 21h").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}