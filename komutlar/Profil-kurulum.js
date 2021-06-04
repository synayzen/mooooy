const Discord = require('discord.js');

exports.run = (client, message, args) => {
 const embed = new Discord.MessageEmbed()
 .setAuthor(`${client.user.username} Yardım Menüsü`,client.user.avatarURL())
 .setThumbnail(message.author.avatarURL())
 .setColor('#d402db')
 .setDescription(`

> ➬ \` .isim <NAME> \` -> İsminizi ayarlarsınız.
 
> ➠ \` .cinsiyet erkek/kız \` -> Cinsiyetinizi belirtirsiniz. \n **Fakat cinsiyetini küçük yazdığına dikkat et <a:nlem:822085975269834822>**

> ➠ \` .yaş <YAŞIN> \` -> Yaşınızı belirtirsiniz.

> ➠ \` .doğumgünü <GÜNÜ AYI> \` -> Doğum günüzü belirtirsiniz.

> ➠ \` .şehir <ŞEHİR> \` -> Yaşadığın şehri belirtirsiniz.

> ➠ \` .favorioyun <OYUN> \` -> Sevdiğiniz oyunu belirtirsiniz.

> ➠ \` .favorişarkı <Şarkı> \` -> Sevdiğiniz şarkıyı belirtirsiniz.

> ➠ \` .profilim \` -> Profilinizi görürsünüz.

📓 **NOT:** Favori oyun ve Favori Şarkı isteğe bağlıdır.
Ama isim, cinsiyet, yaş, doğumgünü ve şehir zorunludur. `)
       
 .setFooter(`𒋝 BİENVENİDOS Developed by Synayzen İvar`)
    .setTimestamp()
    .setImage("")
message.channel.send(embed) 

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'profil-kurulum',   
  description: '',
  usage: ''
};