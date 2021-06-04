const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")
const axios = require('axios');
exports.run = async (client, message, args) => {

if (!args.length) {
            axios.get('https://corona.lmao.ninja/v2/all')
                .then((response) => {
                    const exampleEmbed = new Discord.MessageEmbed()
                        .setColor("BLUE")
                        .setFooter(`𒋝 BİENVENİDOS Developed by Synayzen İvar`)
                        .setTitle('Dünya Geneli COVID-19 Bilgileri')
                        .setDescription('Tanı konulan vakalar, ölümler ve dünya çapında gelişmeler \n Ülkeler hakkında bilgi almak için ' + ` \`${ayarlar.prefix}covid turkey\` `)
                        .addField(`Tanı Konulan Hasta Sayısı`,response.data.cases)
            .addField(`Toplam Ölüm`,response.data.deaths)
            .addField(`Toplam İyileşen`,response.data.recovered)
                        .setTimestamp();

                    message.channel.send(exampleEmbed);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        else {
            axios.get(`https://corona.lmao.ninja/v2/countries/${args[0]}`)
                .then((response) => {
                    const exampleEmbed = new Discord.MessageEmbed()
                        .setFooter(`𒋝 BİENVENİDOS Developed by Synayzen İvar`)
                        .setColor('RED')
                        .setTitle(`${args[0]} - COVID19 Bilgileri`)
                        .addField(`Ülke`,response.data.country)
            .addField(`:microbe: Tanı Konulan Hasta`,response.data.cases ,true)
            .addField(`:test_tube:Bugünkü Vaka`,response.data.todayCases,true)
            .addField(`:skull_crossbones:Toplam Ölüm`,response.data.deaths ,true)
            .addField(`:skull_crossbones:Bugünkü Ölüm`,response.data.todayDeaths ,true)
            .addField(`:syringe:Toplam İyileşen `,response.data.recovered ,true)
            .addField(`:dna:Aktif Vaka`,response.data.active ,true)
            .addField(`:bangbang: Toplam Kritik Vaka`,response.data.critical ,true)
            .addField(`:dna:Toplam Test`,response.data.tests ,true)
                        .setTimestamp()
            .setThumbnail(response.data.countryInfo.flag)
          console.log(response)
                    message.channel.send(exampleEmbed);
                })
                .catch((error) => {
          message.channel.send(':x: Hata \n Lütfen ülke girerken global olarak giriniz. Örnek: Turkey veya turkey şeklinde girebilirsiniz.')
                    console.log(error);
                });
        }
}
    

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["corona", "covid", "covid19", "covıd", "virüs", "coronavirüs"],
  permLevel: 0
};

exports.help = {
  name: 'korona',
  description: 'Ülkelerdeki COVID-19 vakalarını inceyelebilirsiniz',
  usage: 'korona <ülke>'
};