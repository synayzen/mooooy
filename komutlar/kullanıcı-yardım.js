
const Discord = require('discord.js');

exports.run = (client, message, args) => {
 const embed = new Discord.MessageEmbed()
 .setAuthor(`${client.user.username} Kullanıcı Yardım Menüsü`,client.user.avatarURL())
 .setThumbnail(message.author.avatarURL())
 .setColor('#2baa05')
 .setDescription(`
 > ➥ \` !afk [isterseniz sebep] \` -> Afk olduğunuzu belirtme.
 
 > ➥ \` .avatar \` -> Avatarınızı gösterir.
 
 > ➥ \` .avatar <@etiket> \` -> Başkasının Avatarınızı gösterir.

 > ➥ \` !istatistik [üye] \` -> Kullanıcı Bilginizi gösterir.
 
 > ➥ \` .gel <@etiket> \` -> Yanınıza gelmenizi isteyen kişiyi etiketle .
 
 > ➥ \` .git <@etiket> \` -> Yanına gitmek istediğin kişiyi etiketle.

 > ➥ \` !çek [üye]  \` -> İstediğiniz kişiyi yanınıza çekersiniz.

 > ➥ \` !git [üye] \` -> İstediğiniz kişinin yanınıza gidersiniz.
 
 > ➥ \` .bot-bilgi \` -> Botun  tüm bilgilerini gösterir 
 
 > ➥ \` .taglı \` -> Taglı sayısını gösterir.
 
 > ➥ \` .canlıdestek \` -> 📞canlı-destek sağlar.

 > ➥ \` .davet \` -> Davet linkini gösterir.

 > ➥ \` .oylama <oylamaismi> \` -> Oylama yapmanızı sağlar.
 
 > ➥ \` .yapımcım \` -> Yapımcım.
 
 > ➥ \` .sikayet <Şikayet> \` -> Şikayet de bulunursunuz.\``)
 .setFooter(`𒋝 BİENVENİDOS Developed by Synayzen İvar`)
    .setTimestamp()
    .setImage("https://cdn.discordapp.com/attachments/844277649165123635/845978675077840926/Benvendos.png")
message.channel.send(embed) 

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı-yardım',   
  description: '',
  usage: ''
};

