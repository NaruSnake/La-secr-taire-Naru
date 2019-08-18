exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setImage("https://i.pinimg.com/originals/2d/4f/fa/2d4ffab844b35a103680db1508cd7727.gif")
    message.delete();
    message.channel.send("**Tu n'as pas été sage la punition sera terrible PANPAN CUCUL**").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}