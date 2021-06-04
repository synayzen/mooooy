const Discord = require('discord.js');

exports.run = (client, message, args) => {
 const embed = new Discord.MessageEmbed()
 .setAuthor(`${client.user.username} İstatistik Yardım Menüsü`,client.user.avatarURL())
 .setThumbnail(message.author.avatarURL())
 .setColor('BLUE')
 .setDescription(`

 > ➬ <a:ritim:841388788818247731> İstatistikler <a:ritim:841388788818247731>
 
 > ➠ \`.stat <@etiket> \` -> Belirtilen üyenin tüm ses ve chat bilgilerini gösterir.

 > ➠ \`.top \` -> Top 10 istatistikler.\``)
       
    .setFooter(`𒋝 BİENVENİDOS Developed by Synayzen İvar`)
    .setTimestamp()
    .setImage("https://cdn.discordapp.com/attachments/844277649165123635/845979852938412063/BIENVENIDOS_3.png")
message.channel.send(embed) 

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'istatistik',   
  description: '',
  usage: ''
};