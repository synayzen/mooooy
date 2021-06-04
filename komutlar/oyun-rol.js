const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    if(!message.member.roles.cache.get("664472621248806922") && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setDescription("Bu Komutu Kullanmaya Yetkin Yok.")).setColor('BLACK')

	if (!message.guild) return message.author.send('Bu Komutu Sadece Sunucularda Kulanabilirsiniz.');

    const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
    var jaus =  message.guild.members.cache.filter(r=>r.roles.cache.has("792076267016159273")).size.toString()
    var erkek =  message.guild.members.cache.filter(r=>r.roles.cache.has("799724048162095165")).size.toString()
    var kız =  message.guild.members.cache.filter(r=>r.roles.cache.has("799724047817768970")).size.toString()
    let count = 0;
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  let jaus2 = '⚔'
    const jausunuz = new Discord.MessageEmbed()
        .setColor("PURPLE")
        .setDescription(`
        **__Oyun Rol Seçimi;__** \n 
        <:Amongus:846295276507758653> **:** \` Among Us \` \n 
        <:bf1:846295320224727071> **:** \`Battlefield 1 \` \n
        <:CSGO:846295331922903080> **:**  \` Counter-Strike Global Offensive \` \n 
        <:warzone:846295570053201940> **:**  \` Call of Duty®: Warzone \` \n 
        <:dota2:846295343641788426> **:**  \` Dota 2 \` \n 
        <:FORNTE:846295362313781278> **:**  \` Fortnite \` \n 
        <:GARTC:846295378734743570> **:**  \` Gartic.io \` \n 
        <:EuroTruckSimulator2:846295263034736671>  **:** \`Euro Truck Simulator 2 \` \n
        <:GTAV:846295395437248533> **:**  \` Gta V \` \n 
        <:Balksz1:846295290557366282> **:**  \` League Of Legends \` \n 
        <:LeagueofLegendsmobiel:846341969521541140> **:**  \` Wild Rift \` \n 
        <:MNECRAFT:846295410683019284> **:**  \` Minecraft \` \n 
        <:rainbowsixege1:846295501438844938> **:**  \` Tom Clancy's Rainbow Six Siege \` \n 
        <:uno2:846295526386434068> **:**  \` Uno \` \n 
        <:payday21:846295438700445756> **:**  \` Pay Day 2 \` \n 
        <:Rocketleague:846295513254068234> **:**  \` Rocket League \` \n 
        <:PUBG:846295485894492170> **:**  \` Pubg \` \n 
        <:PUBGMOBLE:846295466668851230> **:**  \` Pubg Mobile \`  \n 
        <:Valorant:846295536792895509> **:**  \` Valorant \`  \n 
        <:zula:846295587946889246> **:**  \` Zula \``)

    .setFooter(`Aşağıda ki emojilere tıklayarak, oynadığınız oyunların rolünü seçebilirsiniz.`)
    message.channel.send(jausunuz)

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['botbilgi'],
    permLevel: 0
};

exports.help = {
    name: 'oyunrolleri',
    description: 'oyunrolleri',
    usage: 'oyunrolleri'
};

