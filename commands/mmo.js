exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setImage("https://i.pinimg.com/originals/16/ec/68/16ec687bad641829818d7d404e27ef45.png")
    message.delete();
    message.channel.send("@everyone Retrouvez NaruSnake en compagnie de AdryNeko ce soir sur Left 4 Dead 2 en custom map entre 20h30 - 21h").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}