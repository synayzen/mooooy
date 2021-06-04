
const Discord = require('discord.js');

exports.run = (client, message, args) => {
 const embed = new Discord.MessageEmbed()
 .setAuthor(`${client.user.username} Moderasyon Yardım Menüsü`,client.user.avatarURL())
 .setThumbnail(message.author.avatarURL())
 .setColor('#b17eff')
 .setDescription(`
 > ➥ \` !ban [üye] [sebep]  \` -> Ban komutu.

 > ➥ \` !ban liste \` -> Banlananları gösterir.

 > ➥ \` !ban bilgi [id] \` -> Ban hakkında bilgi verir.

 > ➥ \` !jail [üye] [sebep] \` -> Jail komutu.

 > ➥ \` !karantinaal [üye] \` -> Karantinaya alır.

 > ➥ \` !kick [üye] [sebep] \` -> Kick komutu.

 > ➥  \` !kilit \` -> Kanalı kilitler.
 
 > ➥ \` !mute [üye] [sebep] \` -> Mute Komutu.
 
 > ➥ \` !sesmute [üye] [süre] [sebep] \` -> Ses Mute komutu.
 
 > ➥ \` !sicil [üye]  \` -> Sicil sorgulama.
 
 > ➥ \` .kontrol <@arkın> \` -> Arkadaşının hangi kanalda olduğunu bulma.
 
 > ➥ \` !sunucubilgi \` -> Sunucu hakkındaki bilgi verir.
 
 > ➥ \` !temizle 1-100 \` -> Mesaj temizleme.
 
 > ➥ \` !tempjail [üye] [süre] [sebep] \` -> Süreli Jail komutu.
 
 > ➥ \` !tempmute [üye] [süre] [sebep] \` -> Süreli Mute komutu.

 > ➥ \` .şikayet <Şikayet Nedeni> \` -> Şikayet komutu.

 > ➥ \` .canlıdestek \` -> Canlı destek komutu.
 
  > ➥ \` .sikayet <Şikayet> \` -> Şikayet de bulunursunuz.
 
 > ➥ \` .taglı \` -> Taglı üye sayısını gösterir.

 > ➥ \` .yetkili-başlangıç [üye] \` -> Belirtilen üyeye deneme yetkisi rollerini verir.

 > ➥ \` .yetkiliyi-al \` -> Belirtilen üyenin deneme yetkisi rollerini alır.
 
 > ➥ \` .sesteki-yetkililer \` -> Sesteki yetkilileri gösterir.

 > ➥ \` !unjail [üye] \` -> Jaili kaldırır.

 > ➥ \` !unmute [üye] \` -> Muteyi kaldırır.

 > ➥ \` !uyarı [üye] [sebep] \` -> Uyarı komutu.
 
 > ➥ \` !unban [id] [isterseniz sebep] \` -> Ceza verme`)
 .setFooter(`𒋝 BİENVENİDOS Developed by Synayzen İvar`)
    .setTimestamp()
    .setImage("https://cdn.discordapp.com/attachments/844277649165123635/845980774355435531/Benvendos_1.png")
message.channel.send(embed) 
//sharpen
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'moderasyon',   
  description: '',
  usage: ''
};