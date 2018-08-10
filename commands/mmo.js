exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setDescription("@everyone Retrouvez NaruSnake en compagnie de AdryNeko ce soir sur Révélation Online entre 20h30 - 21h")
    .setImage("https://i.pinimg.com/originals/6d/e8/b7/6de8b7f16890eb2268e925bb2125afdc.png")
    message.delete();
    message.channel.send({embed}).catch(console.error);
    console.log
}