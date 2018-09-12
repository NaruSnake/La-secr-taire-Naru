//commande say//
const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const Testeurs_Bots

exports.run = (client, message, args) => {
    let text = args.slice(0).join(" ");
  if  (message.member.roles(Testeurs_Bots),
        message.delete(),
         message.channel.send(text).catch(console.error));
   if (message.delete(),
         message.channel.send("on ne joue pas avec moi").catch(console.error));
    console.log
}