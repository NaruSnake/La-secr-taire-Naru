
exports.run = (client, message, args) => {
  const Discord = require('discord.js');
  const embed = new Discord.RichEmbed()
  .setTitle("**COMMANDES**")
  .setColor(0x00FE00)
  .setDescription("Voici la liste des commandes pour que je puisses me mettre au travail pour vous")
  .setImage("https://i.pinimg.com/originals/f2/0f/9e/f20f9e7505417ce6ce4a42ecf13bcbc7.jpg")
  .setTimestamp()
  .addField(":computer: **Liste**",
   "``adry``, ``bg&e``, ``ddda``,``gamedev``, ``help``,``invite``,``jdrac``,``jdrdd``,``kick``,``mmo``,``moemon``,``ori``,``prog``,``say``,``tera``,``test``", true)
  
  .addBlankField(true)
  message.delete();
  message.channel.send({embed}).catch(console.error);
    console.log
}