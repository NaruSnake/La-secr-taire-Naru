exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setDescription(" Le lien de la chaîne: https://www.twitch.tv/narusnake")
    .setImage("https://i.pinimg.com/originals/12/91/39/1291391aa8378d404596ec161e1a9f72.png")
    message.delete();
    message.channel.send("@everyone Ce soir on va faire du Randomizer, Naru va t'il etre salé ? on débute le stream dans 1h environ").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}