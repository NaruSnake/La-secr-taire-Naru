//commande say//

exports.run = (client, message, args) => {
    let text = args.slice(0).join(" ");
    message.member.hasPermission("MANAGE_MESSAGES"); return message.channel.send("tu as pas le droit connard");
    message.delete();
    message.channel.send(text).catch(console.error);
    console.log
}