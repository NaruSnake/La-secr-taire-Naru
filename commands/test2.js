//commande say//

exports.run = (client, message, args) => {
    let text = args.slice(0).join(" ");
   if (message.delete());
    message.member.hasPermission("MANAGE_MESSAGES"); 
    message.channel.send(text).catch(console.error);
   if (message.delete());
   message.channel.send("on ne joue pas avec moi").catch(console.error);
    console.log
}