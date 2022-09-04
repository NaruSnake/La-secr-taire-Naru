exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setImage("https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/super_nintendo_5/H2x1_SNES_SuperMarioKart.jpg")
    message.delete();
    message.channel.send("@everyone Retrouvez-moi cette après-midi à partir de 14h jusqu'à 16h (voir moins si on finit le jeu avant  ou plus s'il reste quelque circuit)pour le début du marathon Mario Kart.  On les fera dans l'ordre de sortie dont on va débuter par **Super Mario Kart** sur **Snes**. Je vous dis à tout à l'heure.").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}