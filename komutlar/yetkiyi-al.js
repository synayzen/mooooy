const Discord = require('discord.js');
const rdb = require('quick.db');
const moment = require('moment');
const ayarlar = require("../ayarlar.json")
exports.run = async (client, message, args) => {
let charles = message.guild.roles.cache.find(r => r.id === ayarlar.charlesROL)
let staf = message.guild.roles.cache.find(r => r.id === ayarlar.staff)

if(!["844277645986496526"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
  return message.channel.send(`Bu komutu kullanabilmek için adam olmalısın!`).then(x => x.delete({timeout: 5000}));
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
  if (!member) return message.channel.send('Bir üye etiketlemelisin.').then(x => x.delete({timeout: 5000}));
 member.roles.remove(charles)
 member.roles.remove(staf)

  let embed = new Discord.MessageEmbed()
  .setColor('#d402db')
  .setDescription(`${member} kullanıcısının yetkiliği yapamadı \n **Alınan Rol** :<a:Assassins_eki:848477152638664704> ${charles} \n **Alınan Rol** :<a:Assassins_eki:848477152638664704> ${staf} \n **Üzgünüz, Başka sefere**. `)
  .setTimestamp()

message.channel.send(embed);
  
let kullanıcı = message.mentions.users.first()
let kanal = client.channels.cache.get(ayarlar.yetkiliLOG)
if(kanal) kanal.send(`
<a:Assassins_eki:848477152638664704> Yᴇᴛᴋɪ Sᴏɴʟᴀɴᴅıʀıʟᴅı
<a:Rgb_ok:833453160713814056> **Yetkiyi Alan:** ${message.author} \`    \` 
<a:Rgb_ok:833453160713814056> **Eski Yetkili:** ${kullanıcı} \`   \` 
<a:Rgb_ok:833453160713814056> **Alınan Rol:** ${charles} \`    \` 
<a:Rgb_ok:833453160713814056> **Alınan Rol:** ${staf} \`    \` 
`)
} 

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['yetkiliyi-al'],
  permLevel: 0
}
exports.help = {
  name: 'yetkiliyi-al',
  description: "Belirtilen üyenin yetkisini alırsın",
  usage: 'yetkiliyi-al @kişi'
}