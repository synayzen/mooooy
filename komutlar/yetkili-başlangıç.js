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
 member.roles.add(charles)
 member.roles.add(staf)

  let embed = new Discord.MessageEmbed()
  .setColor('#d402db')
  .setDescription(`${member} kullanıcısının yetkili denemesi başladı \n **Verilen Rol** :<a:Assassins_eki:848477152638664704> ${charles} \n **Verilen Rol** :<a:Assassins_eki:848477152638664704> ${staf} \n **Başarılar Dilerim**. `)
  .setTimestamp()

message.channel.send(embed);
let kullanıcı = message.mentions.users.first()
let kanal = client.channels.cache.get(ayarlar.yetkiliLOG)
message.guild.members.cache.get(kullanıcı.id).send(`<a:Assassins_eki:848477152638664704> 𝐘𝐞𝐧𝐢 𝐘𝐞𝐭𝐤𝐢𝐥𝐢𝐦𝐢𝐳 𝐌𝐞𝐫𝐡𝐚𝐛𝐚 \n <a:Rgb_ok:833453160713814056> **Yetkini başlatan:** ${message.author} \n <a:Rgb_ok:833453160713814056> **Verilen Rol:** \`𒋝・CHARLES GABRİEL SİVERT\` \n <a:Rgb_ok:833453160713814056> **Verilen Rol:** \`⚒・Staff\` \n <a:Rgb_ok:833453160713814056> <#844277646014677039> kanalından \`⚒・Staff\` yetkisinin görevlerini öğrenebilirsin`)
if(kanal) kanal.send(`
<a:Assassins_eki:848477152638664704> Yᴇɴɪ Yᴇᴛᴋɪʟɪ
<a:Rgb_ok:833453160713814056> **Yetkiyi başlatan:** ${message.author} \`    \` 
<a:Rgb_ok:833453160713814056> **Yeni Yetkili:** ${kullanıcı} \`   \` 
<a:Rgb_ok:833453160713814056> **Verilen Rol:** ${charles} \`    \` 
<a:Rgb_ok:833453160713814056> **Verilen Rol:** ${staf} \`    \` 
`)
  
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['yetkili-başlangıç'],
  permLevel: 0
}
exports.help = {
  name: 'yetkili-başlangıç',
  description: "Belirtilen üyeye deneme yetkisi rollerini verir",
  usage: 'yetkili-başlangıç @kişi'
}