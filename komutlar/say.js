const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    if(!message.member.roles.cache.get("844277645683195938") && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setDescription("Bu Komutu Kullanmaya Yetkin Yok.")).setColor('BLACK')

	if (!message.guild) return message.author.send('Bu Komutu Sadece Sunucularda Kulanabilirsiniz.');

    const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
    var jaus =  message.guild.members.cache.filter(r=>r.roles.cache.has("836157254918209599")).size.toString()
    var erkek =  message.guild.members.cache.filter(r=>r.roles.cache.has("844277645814661199")).size.toString()
    var kız =  message.guild.members.cache.filter(r=>r.roles.cache.has("844277645855293500")).size.toString()
    let count = 0;
    let botlar = message.guild.members.cache.filter(m => m.user.bot).size;
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  let jaus2 = '𒋝'
    const jausunuz = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setAuthor(`${message.guild.name}`, `https://cdn.discordapp.com/icons/${message.guild.id}/${message.guild.icon}.webp`)
     .setDescription(`
       <a:assassins_Yonok:827100827943960576> Sunucuda toplam \`${message.guild.memberCount}\` Üye bulunmaktadır. \n Hedef:\`500\` <a:assassins_beyazdc:820723367195836416> \n Üye Durumları \n <:bcevrimici:846050000286515200>**${message.guild.members.cache.filter(o => o.presence.status === 'online').size}** Çevrimiçi\n <:bbosta:846049997312622642> **${message.guild.members.cache.filter(i => i.presence.status === 'idle').size}** Boşta\n <:brahatsizetmeyin:846050007022567484> **${message.guild.members.cache.filter(dnd => dnd.presence.status === 'dnd').size}** Rahatsız Etmeyin\n <:bgorunmez:846050011493695519> **${message.guild.members.cache.filter(off => off.presence.status === 'offline').size}** Çevrimdışı/Görünmez \n <a:yazlm:848905279978209300> **${botlar}** Bot \n
       <a:assassins_Yonok:827100827943960576>  Sesli sohbette \`${count}\` Kişi bulunmaktadır.<a:assassins_voice:820940751458009139> \n
       <a:assassins_Yonok:827100827943960576>  Tagda toplam \`${message.guild.members.cache.filter(m => m.user.username.includes(jaus2)).size}\` Kişi bulunmaktadır.\` 𒋝 \` \n Hedef:\`120\` Taglı Üye \` 𒋝 \` \n
       <a:assassins_Yonok:827100827943960576>  Toplam \`${erkek}\` Erkek bulunmaktadır.\` ♂  \` \n
       <a:assassins_Yonok:827100827943960576>  Toplam \`${kız}\` Kız bulunmaktadır.\` ♀ \` \n
       <a:assassins_Yonok:827100827943960576>  Toplam booster \`${jaus}\` Kişi bulunmaktadır.<a:Assassins_booster:836257198182236241>`)
       
        .setThumbnail(message.author.avatarURL())
          
    .setFooter(`${message.author.username} tarafından istendi. | 𒋝 BİENVENİDOS Developed by Synayzen İvar  `, message.author.avatarURL)
    message.channel.send(jausunuz)

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['botbilgi'],
    permLevel: 0
};

exports.help = {
    name: 'say',
    description: 'Say',
    usage: 'say'
};


