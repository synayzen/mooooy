const Discord = require('discord.js');

exports.run = (client, message, args) => {
 const embed = new Discord.MessageEmbed()
 .setAuthor(`${client.user.username} İnvite Yardım Menüsü`,client.user.avatarURL())
 .setThumbnail(message.author.avatarURL())
 .setColor('#0c2379')
 .setDescription(`
 > ➬ \` .davetlerim \` -> Davetlerini gösterir.

 > ➬ \` .davetler [üye] \` -> Kullanıcının davetlerini gösterir.

 > ➬ \` .invite-top \` -> Davet sıralamasını gösterir.

 > ➬\` .rütbeler \`-> Rütbeleri gösterir.\``)
 
    .setFooter(`𒋝 BİENVENİDOS Developed by Synayzen İvar`)
    .setTimestamp()
    .setImage("https://cdn.discordapp.com/attachments/844277649165123635/845979820101337109/BIENVENIDOS_1.png")
message.channel.send(embed) 

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'invite-yardım',   
  description: '',
  usage: ''
};