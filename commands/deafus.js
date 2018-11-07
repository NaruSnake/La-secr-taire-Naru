exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setImage("https://i.pinimg.com/originals/1d/b2/23/1db2235fc258c84388033d3a58962f14.gif")
    message.delete();
    message.channel.send("@everyone Retrouvez ce soir Naru et Deafus pour faire un massacre ou ce faire massacré sur borderlands 2 vers 21h").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}