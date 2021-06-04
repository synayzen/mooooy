const Discord = require('discord.js');

exports.run = (client, message, args) => {
 const embed = new Discord.MessageEmbed()
 .setAuthor(`${client.user.username} Yardım Menüsü`,client.user.avatarURL())
 .setThumbnail(message.author.avatarURL())
 .setColor('#d402db')
 .setDescription(`
 > ➬ \`.eğlence \` -> Eğlence Komutlarını gösterir.

 > ➬ \`.kullanıcı-yardım \` -> Kullanıcı Komutlarını gösterir.

 > ➬ \`.profil-kurulum \` -> Profil Kurulum Komutlarını gösterir.

 > ➬ \`.moderasyon \` -> Moderasyon Komutlarını gösterir.

 > ➬ \`.invite-yardım \` -> İnvite Komutlarını gösterir.

 > ➬ \`.seviye-yardım \` -> Seviye Komutlarını gösterir.

 > ➬\`.istatistik \`-> İstatistik Komutlarını gösterir.\``)
 
    .setFooter(`𒋝 BİENVENİDOS Developed by Synayzen İvar`)
    .setTimestamp()
    .setImage("https://cdn.discordapp.com/attachments/844277649165123635/845976933975195698/BIENVENIDOS_2.png")
message.channel.send(embed) 

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yardım',   
  description: '',
  usage: ''
};