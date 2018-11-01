exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setImage("https://i.pinimg.com/originals/48/96/08/489608a6e4b88bbe6f9ab17c7ab177b4.gif")
    message.delete();
    message.channel.send("@everyone Retrouvez ce soir Naru et Deafus pour faire le ménage de l'extrême dans la joie et la bonne humeur...").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}
