
const Discord = require('discord.js');

exports.run = (client, message, args) => {
 const embed = new Discord.MessageEmbed()
 .setAuthor(`${client.user.username} Eğlence Yardım Menüsü`,client.user.avatarURL())
 .setThumbnail(message.author.avatarURL())
 .setColor('#d402db')
 .setDescription(`

 > ➥ \`.1vs1 \` -> İstediğiniz bir kişi ile düello atarsınız! 

 > ➥ \`.atatürk \` -> Mustafa Kemal Atatürk'ün sözleri.

 > ➥ \`.bot-bilgi \` -> Botun  tüm bilgilerini gösterir.

 > ➥ \`.beşlik <@etiket> \` -> Etiketlediğiniz Kişiyle Beşlik Çakarsınız.

 > ➥ \`.yazı-banner \` -> Yazdığınız yazıyı banner olarak atar.

 > ➥ \`.yaz \` -> İstediğiniz şeyi bota yazdırır.

 > ➥ \`.aşk <@etiket> \` -> aşkını söyler.
 
 > ➥ \`.aşkölçer <@etiket> \` -> aşkını ölçer.
 
 > ➥ \`.bitcoin \` -> bitcoin borsasının değerlerini söyler.

 > ➥ \`.kurabiye <@etiket> \` -> Kurabiye ikram edersiniz.

 > ➥ \`.instagram <hesap ismi> \` -> Belirlenen instagram hesabı hakkında bilgi verir.
 
 > ➥ \`.havadurumu [şehir] \` -> Belirtiğiniz şehrin havadurumu söyler.
 
 > ➥ \`.csgo \` -> csgo bilgilerini gösterir.

 > ➥ \`.nitro \` -> beleş nitro ahaa.

 > ➥ \`.davet \` -> davet linkini gösterir.
 
 > ➥ \`.kartopu <@etiket> \`-> Kime kartopu atmak isterin.

 > ➥ \`.soda <@etiket> \` -> Soda ısmarlarsınız
  
 > ➥ \`.korona <ülke> \` -> Ülkelerdeki COVID-19 vakalarını inceyelebilirsiniz.
 
 > ➥ \`.saat \` -> Saatı gösterir.
 
 > ➥ \`.köpek \` -> Rastgele gif atar.
  
 > ➥ \`.kedi \` -> Rastgele gif atar.

 > ➥ \`.oylama <oylamaismi> \` -> Oylama yapmanızı sağlar.
 
 > ➥ \`.sigarayak \` -> sigara içersiniz.
 
 > ➥ \`.tkm <taş,kağıt,makas> \` -> Taş kağıt makas oyununu oynar.
 
 > ➥ \`.fal \` -> Neyse falin çıksın halin.
 
 > ➥ \`.yapımcım\` -> yapımcım.
 
 > ➥ \`.yazı-tura\` ->  Yazı Tura Oynamanıza Yarar.
  
 > ➥ \`.yılbaşı\` -> Yılbaşına ne kadar kaldığını gösterir.
 
 > ➥ \`.çıkma-teklifi-et <@etiket> \` -> Çıkma teklifi.

 > ➥ \`.öp <@etiket> \` -> İstediğiniz kişiyi öpersiniz.

 > ➥ \`.sarıl <@etiket> \` -> İstediğiniz kişiyi sarılırsınız.
 
 > ➥ \`.spotify <@etiket> \` -> Kişinin spotify'da dinlediği şarkıyı gösterir.

 > ➥ \`.sunucuresmi \` -> 𝐀𝐬𝐬𝐚𝐬𝐬𝐢𝐧'𝐬 𝐂𝐫𝐞𝐞𝐝 𝐅𝐚𝐦𝐢𝐥𝐲 sunucu resmi.`)
 .setFooter(`𒋝 BİENVENİDOS Developed by Synayzen İvar`)
    .setTimestamp()
    .setImage("https://cdn.discordapp.com/attachments/844277649165123635/845977384460746752/BIENVENIDOS.png")
message.channel.send(embed) 

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'eğlence',   
  description: '',
  usage: ''
};

