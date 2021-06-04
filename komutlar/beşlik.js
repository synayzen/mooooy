const Discord = require("discord.js");

exports.run = function(client, message, args) {

const FwhyCode = message.mentions.users.first();

if (!FwhyCode) return message.reply("Beşlik Çakacağın Kişiyi Etiketlemelisin");

const EmbedFwhyCode = new Discord.MessageEmbed()

    .setDescription(
      `${FwhyCode} ` + `ve **${message.author.username}** Beşlik Çaktı`
    )
    .setImage(
      "https://cdn.discordapp.com/attachments/747769679984066582/748956281930383520/tenor_3.gif"
    )
   .setFooter(`𒋝 BİENVENİDOS Developed by Synayzen İvar`)
  
 return message.channel.send(EmbedFwhyCode);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["beşlikçak"],
  permLevel: 0
};
exports.help = {
  name: "beşlik",
  description: "Etiketlediğiniz Kişiyle Beşlik Çakarsınız",
  usage: ""
};