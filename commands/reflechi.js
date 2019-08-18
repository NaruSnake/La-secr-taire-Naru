exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setImage("https://i.pinimg.com/originals/ac/e2/5d/ace25d2035a956aff7501054bc4abd50.gif")
    message.delete();
    message.channel.send({embed}).catch(console.error);
    console.log
}