exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setImage("https://i.pinimg.com/originals/6d/a9/f3/6da9f32b6a7288239a8a96f051948f01.jpg")
    message.delete();
    message.channel.send("@everyone Retrouvez ce soir NaruSnake pour le let's play de Ori and the Blind Forest vers 20h30 21h").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}