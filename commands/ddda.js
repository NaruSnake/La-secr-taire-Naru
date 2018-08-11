exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setImage("https://i.pinimg.com/originals/56/41/e5/5641e543dc49b11273a5ef15f10e9cc4.png")
    message.delete();
    message.channel.send("@everyone Retrouvez ce soir NaruSnake pour la suite des aventure de Patahuéte et Adry sur Dragon's Dogma Dark Ariser vers 20h30 21h").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}