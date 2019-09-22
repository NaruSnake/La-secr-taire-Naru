exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setDescription(" Le lien de la chaîne: https://www.twitch.tv/narusnake")
    .setImage("https://i.pinimg.com/originals/54/11/53/54115315194bc18849c5635e1da992d0.png")
    message.delete();
    message.channel.send("@everyone Ce soir on va faire du let's play en mode pépère on débute le stream dans 1h environ").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}