exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setImage("https://i.pinimg.com/564x/1e/b3/f4/1eb3f45c190d12eee9e692c8b964e03f.jpg")
    message.delete();
    message.channel.send("@everyone Retrouvez NaruSnake en compagnie de AdryNeko ce soir sur Beyond Good & Evil entre 20h30 - 21h").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}